
const { test, expect } = require('@playwright/test');

test('GET request', async ({ request }) => {
    const URL = 'https://fakestoreapi.com/products';
    const response = await request.get(URL);

    const responseBody = await response.json();
    console.log("Response body: ", responseBody);
    
    // count the lengths of all descriptions
    // count the sum of all ids
    let sum = 0;
    let alldescriptionsLengths = 0;
    for(let user of responseBody){
        let count = user.rating.count;
        expect(count).toBeGreaterThan(0);
        expect(typeof count).toBe('number');
        //console.log("Compared");
        let description = user.description;
        sum += count;
        let lengthOfOneDescription = description.length;
        alldescriptionsLengths += lengthOfOneDescription;

    }
    console.log(sum);
    console.log(alldescriptionsLengths);
});

test('GET request2', async ({ request }) => {
    const URL = 'https://fakestoreapi.com/users?limit=5';
    const response = await request.get(URL);

    const responseBody = await response.json();
    console.log("Response body: ", responseBody);

    let lastCharFromURL = URL.slice(-1);
    console.log(lastCharFromURL);

    let numberOfobjectysArray = responseBody.length;

    expect(lastCharFromURL == numberOfobjectysArray).toBeTruthy();

});

test('GET request3', async ({ request }) => {
    
    let array = [1,2,3,4,5];
    let userIDSum = 0
    for (let id of array) {
        const URL = `https://fakestoreapi.com/carts/user/${id}`;
        const response = await request.get(URL);
        const responseBody = await response.json();
        console.log("Response body: ", responseBody);
        
        for(let user of responseBody){
        let userIdNumber = user.id;
            console.log(userIdNumber);
            userIDSum += userIdNumber;
        }
    }
    
    console.log(userIDSum);
    expect(userIDSum).toBeLessThan(30);
})

test.only('GET request4', async ({ request }) => {
    let URL = 'https://fakestoreapi.com/users?sort=desc';
    const response = await request.get(URL);
    const responseBody = await response.json();
    console.log("Response body: ", responseBody);
    let idArray = [];;
    for (let user of responseBody){
        idArray.push(user.id);
    }
    console.log(idArray);

    let sorted = true;
    for (let index= 0; index < idArray.length-1; index++) {
    console.log(idArray[index], idArray[index+1])
    if(idArray[index] < idArray[index+1]){
        
        sorted = false;
    }
    
    
}
//expect(sorted).toBeTruthy();
expect(sorted).toBeFalsy();
}
);



