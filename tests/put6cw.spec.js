/*
https://jsonplaceholder.typicode.com/posts
Создай массив с тестовыми данными для обновления пользователей.
Выполни PUT-запросы для каждого элемента массива. (цикл)
Проверь статус ответа и убедись, что он равен 200.
Проверь, что данные в ответе соответствуют отправленным.
Замерь и выведи время ответа для каждого запроса.
Убедись, что время ответа от сервера менее 2 секунд
*/
const { test, expect } = require('@playwright/test');

test('PUT request to update a post', async ({ request }) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    // Fetch initial response
    const initialResponse = await request.get(url);
    const initialResponseBody = await initialResponse.json();
    console.log('This is initialResponseBody:', initialResponseBody);

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

    for (let object of addition){
        const start = Date.now();
        const responseAfterChange = await request.put(url, {
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
       const end = Date.now();
       let difference = start - end;
       expect(difference).toBeLessThan(2001);
       console.log("Ran the test")
       
}

});