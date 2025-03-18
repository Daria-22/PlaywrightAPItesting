//npm install --save-dev @playwright/test @graphql-mocks/network-playwright
//npm init playwright api-tests


import { test, expect } from '@playwright/test';

test('Fetch data from GraphQL API', async ({ request }) => {
  const response = await request.post('https://student-landing-api.blake-staging.com/graphiql', {
    data: {
      query: `
        query {
          Student {student{AssignmentInputs {
            
            assignmentTaskId
            assignmentUuid
          }}}
        }
      `
    }
  });

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody); // Print response to check the data
});