const { test, expect } = require('@playwright/test');  
const constants = require('../constants/const.js'); // used to import all links
const PASSWORD = require('../testData/credentials.json');
//make a put request to  http://restful-booker.herokuapp.com/booking/6 using a token

test('CREATE POSTAFTER AUTHORISATION ', async ({ request }) => {
    //logging to page to get token, passing password
    const postApiResponse = await request.post(constants.POST_URL4, {data: PASSWORD});
    
    //saving received token to variable - there are three for every browser
    let tokenResponse = await postApiResponse.json()
    let token = tokenResponse.token;
    console.log(token); // prints 3 different tokens  for each browser
    
    // Step 2: Use token in a PUT request

    //check if the record exists:
    const beforePutResponse = await request.get(constants.POST_URL5);
    const beforePutResponseJson = await beforePutResponse.json();
    console.log(beforePutResponseJson); // prints  
    ///{
//   firstname: 'Jim',
//   lastname: 'Ericsson',
//   totalprice: 214,
//   depositpaid: false,
//   bookingdates: { checkin: '2022-08-15', checkout: '2022-12-01' },
//   additionalneeds: 'Breakfast'
// }
    //making put request to update the record, passing token in header
    const postResponseAfterAuth = await request.put(constants.POST_URL5, 
        
       {
             headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            //'Authorization': "Basic YWRtaW46cGFzc3dvcmQxMjM=", //does not work
            'Cookie': `token=${token}` // does not work
             },
            json: {
                firstname: "John",
                lastname: "Doe",
                totalprice: 200,
                depositpaid: true,
                bookingdates: {
                    checkin: "2024-05-01",
                    checkout: "2024-05-10"
                },
                additionalneeds: "Lunch"
            }
    });
    let postResponseAfterAuthBody = await postResponseAfterAuth.text(); 
    console.log('Plain Text Response:', postResponseAfterAuthBody); //prints Bad request
    //let postResponseAfterAuthBody = await postResponseAfterAuth.json(); ///fails
    //console.log(postResponseAfterAuthBody.body); // fails
    });
    
