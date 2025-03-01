// Основные задачи:
// Отправка GET-запроса:
// - Отправьте GET-запрос на API с использованием метода request.get.
const { test, expect } = require('@playwright/test');
test('GET request - get body, ensure data is present', async ({ request }) => {
    const URL = 'https://dummyjson.com/products';
    const response = await request.get(URL);
    // - Получите и распарсите тело ответа с помощью response.json()
    const responseBody = await response.json();
// Проверка структуры ответа:
// - Проверьте, что в ответе присутствуют ключи products и total.
expect(responseBody).toHaveProperty('products');
console.log("Checked property product")
expect(responseBody).toHaveProperty('total');
console.log("Checked property total");
// - Убедитесь, что products — это массив.
//Работа с данными продуктов:
// - Проверьте, что список продуктов не пустой.
expect(responseBody.products.length).toBeGreaterThan(0);
console.log("Checked that length of array is not 0");
// - Найдите и выведите в консоль третий продукт в списке.
let thirdProduct = responseBody.products[2];
console.log(thirdProduct);
// - Выведите рейтинг четвертого продукта и убедитесь, что его значение равно 2.51.
let fourthProductRating = responseBody.products[3].rating;
console.log(fourthProductRating);
expect(fourthProductRating).toBe(2.51);
console.log('Checked rating of 4th product to be 2.51')
// Проверка изображений продуктов:
// - Найдите изображения (ссылки) третьего продукта.
let thirdProductImg = responseBody.products[2].images;
console.log(thirdProductImg);
// - Убедитесь, что this image — это string и ссылки на файлы формата .png.
expect(typeof(thirdProductImg)).toBe('object');
console.log("Verified that it's a string");

expect(thirdProductImg.toString()).toContain('.png');

expect(thirdProductImg.toString().endsWith('.png')).toBeTruthy();
//expect(thirdProductImg.toString().endsWith('.jpg')).toBeTruthy();
console.log('Verified that type of file is .png.');
// Работа с ценами продуктов:
// - Соберите все цены продуктов в массив.
let pricesArray = [];
for(let product of responseBody.products){
    console.log(product.price);
    pricesArray.push(product.price);
}
console.log(pricesArray);

// - function to define if the prices in array are over zero
function allPricesMoreThanZero(arrayOfPrices) {
    return pricesArray.every(price => typeof price === 'number' && price > 0);
}

expect(allPricesMoreThanZero(pricesArray)).toBeTruthy();
console.log('Verified that all prices are above zero.')

// - Вычислите сумму всех цен и выведите результат в консоль с точностью до двух знаков после запятой.
let sum = 0;
for (let price of pricesArray){
    sum += price;
}
//to round up to a certain decimal digits use number.toFixed(numberOfDigits)
console.log('The sum of all prices of all products', sum.toFixed(2));
// */


});






