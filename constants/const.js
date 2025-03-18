// constants.js
//create this file for adding here links necessaru to work with pages
const API_BASE_URL = 'http://restful-booker.herokuapp.com';
const POST_URL = 'https://reqres.in/api/users';
const POST_URL2 = 'http://restful-booker.herokuapp.com/booking'
const POST_URL3 = 'https://jsonplaceholder.typicode.com/posts'
const POST_URL4 = 'http://restful-booker.herokuapp.com/auth'
const POST_URL5 = 'http://restful-booker.herokuapp.com/booking/6'

//create a mododule for exporting data module.exports = {include here the links separated by comma}
module.exports = { //объект для экспорта данных 
    API_BASE_URL,
    POST_URL,
    POST_URL2,
    POST_URL3,
    POST_URL4,
    POST_URL5
};