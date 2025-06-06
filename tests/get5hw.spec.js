const { test, expect } = require('@playwright/test');  
const constants = require('../constants/const.js'); // used to import all links
//for functions use {} to import
const {idsInArrayAreUnique} = require('../functions/function_uniqueID_length.js'); 


    

test('GET request - get body, ensure id is unique', async ({ request }) => {
    const getRequestUsers = await request.get(constants.GET_URL8);
    const getrequestUsersJson = await getRequestUsers.json();
    //console.log(getrequestUsersJson);
    //console.log(typeof getrequestUsersJson)
    let allUsers = getrequestUsersJson.allUsers;
    console.log("These are all users from get request", allUsers);
    let array = [];
    for (let item of getrequestUsersJson.allUsers){
        array.push(item._id)
    }
    console.log("These are user's ids added in an array", array);
    //use function which defines if the unique set size is equal to initial array length by division,if
    // it equals the 1 - true, else - false
    let myTestCase = idsInArrayAreUnique(array);
    expect(myTestCase).toBeTruthy();
    console.log('Finished test to define that IDs are unique')

})

//npx playwright test tests/get5hw.spec.js --project=chromium
//npx playwright test tests/get5hw.spec.js --project=webkit
//npx playwright test tests/get5hw.spec.js --project=firefox