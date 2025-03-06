//https://api.escuelajs.co/api/v1/categories/${userId}
// change Id
// change data
// {
//     "id": 1,
//     "name": "change",
//     "slug": "change",
//     "image": "https://i.imgur.com/QkIa5tT.jpeg",
//     "creationAt": "2025-03-06T00:23:51.000Z",
//     "updatedAt": "2025-03-06T05:26:09.000Z"
//   }
//   veerify that image has imgur in functon

const { test, expect } = require('@playwright/test');
//to verify that link with image has 'imgur' text
function verifyImgur (imageLink){
    let searchedText = 'imgur';
    let contains = imageLink.includes(searchedText);
    return contains;
}


test('PUT request to update a post', async ({ request }) => {
    //search for user 3
    let userId = '3';
    //provide link of api
    const url = `https://api.escuelajs.co/api/v1/categories/${userId}`;

    // Fetch initial response with get request
    const initialResponse = await request.get(url);
    const initialResponseBody = await initialResponse.json();
    console.log(initialResponseBody.length);//prints 5
    console.log('This is initialResponseBody,:', initialResponseBody); //this works
    // Send put request 
    const responseAfterChange = await request.put(url, {
        data: {
            "id": "99",
            "name": "Viktor",
        }
    })
    const ResponseBodyAfter = await responseAfterChange.json();
    console.log("After put request", ResponseBodyAfter);

    let linkOfImage = ResponseBodyAfter.image;
    console.log(linkOfImage);

    //expect(checkImgurInUrl(linkOfImage)).toBeTruthy();

})


   
    
