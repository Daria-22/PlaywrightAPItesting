const { test, expect } = require('@playwright/test');
//const constants = require('../constants/const.js');
const {POST_URL3} = require('../constants/const.js');
const bookingApiRequestBody = require('../testData/postRequestBody.json');

test('CREATE POST API REQUEST ', async ({ request }) => {
    
    
    // const testDataArray = [
    //     { userId: '1', id: '101', title: 'API Course', body: 'This is a test body' },
    //     { userId: '2', id: '102', title: 'JavaScript Course', body: 'Learning JavaScript' },
    //     { userId: '3', id: '103', title: 'Python Course', body: 'Introduction to Python' },
    //     { userId: '4', id: '104', title: 'Java Course', body: 'Exploring Java' },
    // ];

    for (let item of testDataArray){
    
    //create post request
    const postApiResponse = await request.post(POST_URL3, {data:{
        item
    }});
    console.log(await postApiResponse.json());  
}

});
test.only('CREATE POST API REQUEST2 ', async ({ request }) => {
    const postApiResponse2 = await request.post(POST_URL3, {data:{
        bookingApiRequestBody 
    }});
});
