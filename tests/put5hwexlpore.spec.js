
const { test, expect } = require('@playwright/test');

test('PUT request to update a post', async ({ request }) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    // Fetch initial response
    const initialResponse = await request.get(url);
    const initialResponseBody = await initialResponse.json();
    console.log('This is initialResponseBody:', initialResponseBody);

    // Send PUT request with updated data
    const responseAfterChange = await request.put(url, {
        data: {
            userId: 3,
            id: 3,
            title: "Melbourner",
            body: "Hi, everyone, I am from Melbourne, I have plenty of hobbies but open to new ones. Tomorrow I am trying pottery."
        },
       headers: {
            'Content-Type': 'application/json'
        }
    });

    // Check if the request was successful (status 200)
    expect(responseAfterChange.status()).toBe(200);

    // Convert response to JSON and verify the updated data
    const responseBody2 = await responseAfterChange.json();
    console.log('Updated response:', responseBody2);

    // Assertions
    expect(responseBody2.title).toBe("Melbourner");
    expect(responseBody2.body).toBe("Hi, everyone, I am from Melbourne, I have plenty of hobbies but open to new ones. Tomorrow I am trying pottery.");
});