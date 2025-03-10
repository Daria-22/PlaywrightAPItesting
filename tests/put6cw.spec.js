/* task
https://jsonplaceholder.typicode.com/posts
Создай массив с тестовыми данными для обновления пользователей.+
Выполни PUT-запросы для каждого элемента массива. (цикл) +
Проверь статус ответа и убедись, что он равен 200. +
Проверь, что данные в ответе соответствуют отправленным. +
Замерь и выведи время ответа для каждого запроса.+
Убедись, что время ответа от сервера менее 2 секунд+
*/
//typical start of a test
const { test, expect } = require('@playwright/test');

//test itself
test('PUT request to update a post', async ({ request }) => {
    //declare the url with which we work
    const url = 'https://jsonplaceholder.typicode.com/posts';

    // Fetch initial response using GET requuest
    const initialResponse = await request.get(url);
    // Transform response into json
    const initialResponseBody = await initialResponse.json();
    console.log('This is initialResponseBody:', initialResponseBody);
    // Print to verify the initial length
    console.log(`The initial response body contains ${initialResponseBody.length} elements`)
    
    // declare the array of addition, contains userId, id, title and body
    // Создай массив с тестовыми данными для обновления пользователей.
    let addition = [
        {
                "userId": 1,
                "id": 1,
                "title": "Brat Brown",
                "body": "Brat Brown, software developer"  
        },

        {
            "userId": 2,
            "id": 2,
            "title": "Sarah Johnson",
            "body": "Sarah Johnson, software developer"    
         },
         
         {
            "userId": 4,
            "id": 4,
            "title": "Deborah Peters",
            "body": "Deborah Peters, game developer"    
         },

         {
            "userId": 6,
            "id": 6,
            "title": "Snowflake",
            "body": "Snowflake, cat"    
         }
    ]
    
    // start iteration on the objects of this addition to update the initial data with the new data
    for (let object of addition){
        const start = Date.now(); //getting time before sending the PUT request
        console.log(`
        Working with object id ${object.id}`); //logging which id we are on
       // Выполни PUT-запросы для каждого элемента массива. (цикл) +
        // send put request and getting response 
        // url consists of url and the id of user for each particular record which we update
        const responseAfterChange = await request.put( `${url}/${object.id}`, {
        data: {
            "userId": object.userId,
            "id": object.id,
            "title":object.title ,
            "body": object.body    
        },
       headers: {
            'Content-Type': 'application/json'
        }
    });
       // transform response into json
       const responseAfterChangeBody = await responseAfterChange.json();
       // get time after PUT response is finished
       const end = Date.now();
       // calculate the difference between start and end of work with PUT
       // Замерь и выведи время ответа для каждого запроса.+
       let difference = end - start;
       // verify that the feedback is below 2 sec for thid particular iteration
       
       expect(difference).toBeLessThan(2001);
       // log the difference, confirm finishing this user
       console.log("Ran the test for feedback time:", `the response feedback is ${difference/1000} seconds`);
       
       // verify that status is 200 after change
       // Проверь статус ответа и убедись, что он равен 200. +
       expect(responseAfterChange.status()).toBe(200);
       console.log('Ran test for status 200');

       // logging the changed user
       console.log(`This is the changed user record`, responseAfterChangeBody);
        
       // verify that changed data match the sent data 
       // Проверь, что данные в ответе соответствуют отправленным. +
        expect(object.userId).toBe(responseAfterChangeBody.userId);
        expect(object.id).toBe(responseAfterChangeBody.id);
        expect(object.title).toBe(responseAfterChangeBody.title);
        expect(object.body).toBe(responseAfterChangeBody.body);

        console.log('User data is changed as expected');      
}

});

// to run this test npx playwright test tests/put6cw.spec.js --headed --project chromium