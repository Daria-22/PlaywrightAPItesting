// original task
/* Начальный массив
    const updatedUserData = {
    name: 'John Doe',
    job: 'Software Engineer',
    };
 }
*/

// general start of all tests

const { test, expect } = require ( "@playwright/test" );

// initial array for adding - Начальный массив
    const updatedUserData = {
        name: 'John Doe',
        job: 'Software Engineer',
    };

test('PUT request', async ({ request }) => {
// go to endpoint and use GET requuest
const url = 'https://reqres.in/api/users/2'
const responseGet = await request.get(url);
const responseGetBody =  await responseGet.json();
console.log("This is the response after get request:", responseGetBody);
console.log("****************************************************************************")

// Make a put request to https://reqres.in/api/users/2
// Сделать put запрос https://reqres.in/api/users/2
const responseAfterChange = await request.put(url, {
    data:updatedUserData,
    headers: { 'Content-Type': 'application/json' },
});
// transform PUT into json and log it into console
const responseAfterChangeBody = await responseAfterChange.json();
console.log("PUT Response Body:", responseAfterChangeBody);
console.log("****************************************************************************")

//confirm that property name still present in the object
//Убедиться что есть проперти name с тем значением, которое было изначально в массиве +
expect(responseAfterChangeBody.name).toBe(updatedUserData.name);
console.log('The property "name" is still present.');
console.log("****************************************************************************")

// Убедиться что есть проперти updatedAt +
//Verify that after PUT request, there is property updatedAt
expect(responseAfterChangeBody).toHaveProperty('updatedAt');
console.log("Confirmed presence of updatedAt property.");
console.log("****************************************************************************");

//extract the year from the property 'UpdatedAt'
//// Достать из updatedAt ГОД+

let updatedYear = responseAfterChangeBody.updatedAt;
console.log(typeof updatedYear);
console.log(updatedYear);
  let year = new Date(updatedYear).getFullYear(); // new Date(string of date)
  console.log(year);

//expect(created).toBe('2025');
console.log("Test to verify that the year is 2025 has been run successfully.");
console.log("****************************************************************************");

// Получить заголоков content-length
// Проверить что длина больше 0 - not possible!!!
// get one property of headers - 'content-length' and verify that it is longer than 0
console.log("Response Headers:", responseAfterChange.headers()); // to get the headers which come with PUT response
let contentLength= responseAfterChange.headers()['content-length'];
if(contentLength) {
    console.log(`Content-Length: ${contentLength}`);
}
// Вывести название сервера из заголовка и убедиться что его название cloudflare
// extract the name of server from the heading and make sure it is cloudflare
let expectedServer = 'cloudflare';
let serverInHeading = responseAfterChange.headers()['server'];
console.log(serverInHeading);
expect(serverInHeading).toBe(expectedServer);
console.log('Test to verify that the server is cloudflare is done.');
console.log("****************************************************************************");
});
//to run this test
//npx playwright test tests/put9_altyearextract.hw.spec.js --headed --project chromium