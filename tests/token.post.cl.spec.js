const { test, expect } = require('@playwright/test');  
const constants = require('../constants/const.js'); // used to import all links
const  CREDENTIALS1 = require('../testData/credentials.url6.json'); // used to import password and login

function thisIsIP(ip) {

    const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)|([a-fA-F0-9:]+:+)+[a-fA-F0-9]+)$/;

    let isRegex = ipRegex.test(ip);
    return isRegex;
}

test('CREATE POSTAFTER AUTHORISATION ', async ({ request }) => {
    //go to the link and get a token
    const postApiResponse = await request.post(constants.POST_URL6, {data: CREDENTIALS1});
    // assign token to a variable
    const tokenJsone = await postApiResponse.json();
    //console.log(tokenJsone.accessToken);
    const tokenToUse = tokenJsone.accessToken;
    console.log(tokenToUse);
    //pass the token in the header of the page
    ///* providing accessToken in bearer */
/* providing accessToken in bearer */
// fetch('https://dummyjson.com/auth/me', {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer /* YOUR_ACCESS_TOKEN_HERE */', // Pass JWT via Authorization header
//     }, 
//     credentials: 'include' // Include cookies (e.g., accessToken) in the request
//   })
//   .then(res => res.json())
//   .then(console.log);
  // Pass JWT via Authorization header 
const getRequestAuthorised = await request.get(constants.POST_URL7, {
        headers: {
                  'Authorization': `Bearer ${tokenToUse}`} 
         
   });
const getRequestAuthorisedJS = await getRequestAuthorised.json();
console.log(getRequestAuthorisedJS);

const ibanString = (getRequestAuthorisedJS.bank.iban);
console.log(ibanString);
expect(ibanString.length).toBe(24);
console.log('Iban string test finished');
//wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a', = 42
// network: 'Ethereum (ERC20)'  starts with Ether
let walletString = getRequestAuthorisedJS.crypto.wallet;
console.log(walletString);
expect(walletString.length).toBe(42);
console.log('Finished test for legnth of wallet string');
let network = getRequestAuthorisedJS.crypto.network;
console.log(network);
expect(network.startsWith ("Ether")).toBeTruthy();
console.log('Finished test to confirm network starts with Ether')

expect(getRequestAuthorisedJS.password).toBe(CREDENTIALS1.password);
console.log('Finished test to confirm that password sent and received match');

expect(thisIsIP(getRequestAuthorisedJS.ip)).toBeTruthy();
// npx playwright test tests/token.post.cl.spec.js    to run the test
})
