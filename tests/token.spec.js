const { test, expect } = require('@playwright/test');
//const constants = require('../constants/const.js'); // used to import all links
const {POST_URL4} = require('../constants/const.js'); // used to import only one link
//create a variable CREDENTIALS which contains json with credentials, import it from ../testData/credentials.json'
const CREDENTIALS = require('../testData/credentials.json') //used to import the creds


test('CREATE POSTAFTER AUTHORISATION ', async ({ request }) => {

    const postApiResponse = await request.post(POST_URL4, {data:
        CREDENTIALS
    });
    console.log(await postApiResponse.json());  
});

// to start this test : npx playwright test tests/token.spec.js