const { test, expect } = require('@playwright/test');
test('GET request - get body, ensure data is present', async ({ request }) => {
    const URL = 'https://reqres.in/api/users/2';
    //  get request
    let responseGet    = await request.get(URL); 
    let resonnseGetRequest = await responseGet.json();
    console.log("Get request body", resonnseGetRequest);
    console.log('Completed get request');
    //get to header from body of response, no need for json
    if (responseGet.headers()['content-type']) {
        console.log("Content-Type:", responseGet.headers()['content-type']);
    } else {
        console.log("No Content-Type because no content");
    }

    // delete request 
    let responseDelete = await request.delete(URL);
    console.log('Completed delete request');
    expect (responseDelete.status()).toBe(204);
    console.log('Confirmed status "204"');
    
    // Проверка наличия заголовков : if yes - type the type of heading
    //                                  no  - No Content-Type because no content
    if (responseDelete.headers()['content-type']) {
        console.log("Content-Type:", responseDelete.headers()['content-type']);
    } else {
        console.log("No Content-Type because no content");
    }

});