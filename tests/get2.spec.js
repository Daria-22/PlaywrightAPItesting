const { test, expect } = require('@playwright/test');
test('GET request - get body, ensure data is present', async ({ request }) => {

// Отправка GET-запроса:
// Отправьте GET-запрос на API с использованием метода request.get.
    const URL = 'https://reqres.in/api/users?page=2';
    const response = await request.get(URL);
// Получение данных:
// Получите тело ответа в формате JSON с помощью response.json() и выведите его в консоль.
// Проверьте статус ответа (ожидается статус 200) и убедитесь, что запрос завершился успешно (response.ok()).
    const responseBody = await response.json();
  //console.log("Response body: ", responseBody);
    expect(response.ok()).toBeTruthy(); //проверка что ответ вернул ок
    expect(response.status()).toBe(200); // 200
// Проверка структуры ответа:
// Убедитесь, что в ответе есть массив data.
// use for let xxx in yyy (not of!!!)   
  let dataPresent = false; 
    for(let element in responseBody){
        //console.log(element);
            if (element === 'data'){
                dataPresent = true; 
                    break;}
   }
   expect(dataPresent).toBeTruthy(); 
}
);

test('GET request - get body, ensure data contains more than 1 user', async ({ request }) => {

    // Отправьте GET-запрос на API с использованием метода request.get.
        const URL = 'https://reqres.in/api/users?page=2';
        const response = await request.get(URL);
        const responseBody = await response.json();
        //console.log("Response body: ", responseBody);
        
    // Проверка структуры ответа:
    // Проверьте, что data — это массив, который содержит как минимум одного пользователя.
   let userData = responseBody.data;
   //console.log(`Length of user data is ${userData.length}`);
   let responseLengthNotNull = false;
   if(userData.length > 0){
    responseLengthNotNull = true;
   }
   expect(responseLengthNotNull).toBeTruthy();

 // Доступ к данным пользователей:
// Извлеките первого и пятого пользователя из массива.
let user1 = userData[0];
let user5 = userData[4];
//Выведите информацию о первом пользователе: id, email, first_name, last_name, и ссылку на аватар.
console.log('Extracted users are:', user1, user5); 
console.log('id user 1:', user1.id);

// Перебор пользователей:
// Пройдите по массиву data и выведите в консоль каждого второго пользователя.
for (let i = 0; i < userData.length; i+= 2) {
    console.log('Printing every even user', userData[i]);
}
// Проверка свойств пользователей:
// Проверьте, что первый пользователь имеет свойства id, email, first_name, last_name и avatar.
let comparedParams = ['id','email','first_name','last_name','avatar'];
let parameterIsEmpty = true;
for (let parameter of comparedParams){
    //console.log(parameter);
    let valueOfParameter = user1[parameter]; //I made a mistake here by using dot notation
    console.log('Accessed value of keys for user1', valueOfParameter);
    if(valueOfParameter !== null && valueOfParameter !== '' && valueOfParameter !== undefined) {
        parameterIsEmpty = false;
    }
    expect(parameterIsEmpty).toBeFalsy();
    //expect(parameterIsEmpty).toBeTruthy();

    // Убедитесь, что id первого пользователя больше 0.
   
}
expect(user1.id).toBeGreaterThan(0);
console.log(`User 1 id is greater that 0 - it is ${user1.id}`)
// Проверьте, что его email заканчивается на @reqres.in
//expect(user1.email).toMatch(/[a-zA-Z0-9.-]+@reqres.com/)
expect(user1.email).toMatch(/[a-zA-Z0-9.-]+@reqres.in/)

// Проверка заголовков ответа:
// Проверьте, что заголовок content-type содержит application/json, чтобы убедиться, что ответ в формате JSON.
// 
const response2 = await request.get(URL);
const header = await response2.headers();
console.log(header);
const headerContentType = header['content-type'];
console.log(headerContentType);
expect(headerContentType).toContain('application/json');
});



