const { test, expect } = require('@playwright/test');

test('GET request', async ({ request }) => {
    const URL = 'https://reqres.in/api/users?page=2';
    const response = await request.get(URL);

    const responseBody = await response.json();
    console.log("Response body: ", responseBody);

    expect(response.ok()).toBeTruthy(); //проверка что ответ вернул ок
    expect(response.status()).toBe(200); // 200

    // Переменная для отслеживания результата
    let allUrlsStartWithHttps = true;

    // Перебираем все элементы
    for (let i = 0; i < responseBody.data.length; i++) { //"avatar": "https://reqres.in/img/faces/9-image.jpg" starts with https
        const user = responseBody.data[i];
        console.log("User", user);
        // Проверяем, начинается ли imdb_url с 'https://'
        if (!user.avatar.startsWith('https://')) {
            allUrlsStartWithHttps = false; // Если хотя бы один URL не соответствует, устанавливаем в false
            break; // Можно выйти из цикла, если найдено несоответствие
        }
    }

    // Проверяем, что все URL соответствуют условию
    expect(allUrlsStartWithHttps).toBe(true);
    console.log('Все URL начинаются c HTTPS.');

});

//get user 2  and verify that text field it's longer than 50
test('GET request user2', async ({ request }) => {
    const URL = 'https://reqres.in/api/users/2';
    //received object
    const responseUser2 = await request.get(URL);
    //to get body use json!!! transition to json
    const responseBodyUsesr2 = await responseUser2.json();
    console.log(responseBodyUsesr2);
    //used dot notation to get to text, applied length to it
    let textFieldcontent = responseBodyUsesr2.support.text.length;
    console.log(textFieldcontent);
    //assertion 
    expect(textFieldcontent).toBeGreaterThan(50);

});
test('GET user ID', async ({ request }) => {
    const URL = 'https://reqres.in/api/users/2';
    //received object
    const responseUser2 = await request.get(URL);
    //to get body use json!!! transition to json
    const responseBodyUsesr2 = await responseUser2.json();
    console.log(responseBodyUsesr2);
    //used dot notation to get to text, applied length to it
    let userId = responseBodyUsesr2.data.id;
    console.log(userId);
    //assertion 
    expect(userId).toBeGreaterThan(0);

}
);
test.only('verify user email domain is "reqres.in"', async ({ request }) => {
    const URL = 'https://reqres.in/api/users/2';
    //received object
    const responseUser2 = await request.get(URL);
    //to get body use json!!! transition to json
    const responseBodyUsesr2 = await responseUser2.json();
    console.log(responseBodyUsesr2);
    //used dot notation to get to text, applied length to it
    let email = responseBodyUsesr2.data.email;
    console.log(email);
    //assertion 
    expect(email.endsWith('reqres.in')).toBeTruthy();

}
);