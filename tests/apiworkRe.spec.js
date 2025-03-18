const { test, expect } = require('@playwright/test');

test('GET unauthentificated user RE', async ({ request }) => 

{
let jwt = '<somehow set this up>'
let getRequest = await request.get('https://api.blake-staging.com/assignments-api/api/v2/student/re/tasks', {
  headers: {
    Authorization: jwt
  }
}
);
let receivedRequest = await getRequest.json();
console.log(receivedRequest);
expect(receivedRequest.error).toBe('unauthenticated');
});

test('GET, authentificated user RE, no tasks', async ({ request }) => 

    {
    let jwt = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQaUIxRUtYSEdLaVVjaXV6UDV1dV9uMGp3Yk1lRzBqWlF3V00yREhYd2NjIn0.eyJleHAiOjE3NDIzMDU3MjMsImlhdCI6MTc0MjMwMjEyMywiYXV0aF90aW1lIjoxNzQyMzAyMTIzLCJqdGkiOiI4MzhkN2E5My0wZWM4LTRlZWUtYWM3OC0zZWQ5MWUxM2IwYWUiLCJpc3MiOiJodHRwczovL2lkLmJsYWtlLXN0YWdpbmcuY29tL3JlYWxtcy9ibGFrZSIsImF1ZCI6WyJyZWFkaW5nZWdncyIsImJsYWtlIl0sInN1YiI6ImY6YjAwOTIyOWItNGU1Yy00MDAzLWIxYWItNzZkYzcwMTQzNDI3OnMtNTg2MjYwOSIsInR5cCI6IklEIiwiYXpwIjoicmVhZGluZ2VnZ3MiLCJub25jZSI6IjdmY2NhNDlhMDBlOTFlOWI5YjgwMmIxN2IyMDE1OWE0Iiwic2lkIjoiMWYwMjQ2YTItYjZiZS00ZmRhLTgzYWUtMTBjNWVjZjE3Njc1IiwiYXRfaGFzaCI6IkdmZHB1cFV0VHYzVUl5VEZXSFJyTmciLCJkYXRhIjp7InNjaG9vbF9pZCI6MTk2NDUxLCJpZCI6NTg2MjYwOSwidHlwZSI6InN0dWRlbnQifX0.WM1zBaNfzWSvTFTjSbHioGLG3HQWwkjOepaN7H0l9hpcX8QMrt3npjrZ4eljcG2dRkdcem0npkwhAZ92AUzBd25PSUKG_ZuG5AgtIBDbKw6GxEzWaQ2IoMYgFsV8iy4g9Kqs_srGfaLU3Ir533cXRvRHBVXDHwhRcZTfQ5vkaPtPgMbKZVfigzIb4PJhSaxzmvkcO0Ki-cfkJDs3Bzly2bUFX5ZBRyneDkckZin-r8_y_DmhX0GgXZ0_xhdH03ut9DQEafvzsQYR-hl6pa_VdFL_U7E0WAw5LaX1cPM22sBPYfKEFekB2JMCQ2tLTK5UKrL6KHMMYbBmsJkMh1QtgA'
    let getRequest = await request.get('https://api.blake-staging.com/assignments-api/api/v2/student/re/tasks', {
      headers: {
        Authorization: jwt
      }
    }
    );
    let receivedRequest = await getRequest.json();
    console.log(receivedRequest);
    expect(receivedRequest).toBeEmpty;
    });


    // test('GET, authentificated user RE, with 1 task', async ({ request }) => 

    //     {
    //     let jwt = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQaUIxRUtYSEdLaVVjaXV6UDV1dV9uMGp3Yk1lRzBqWlF3V00yREhYd2NjIn0.eyJleHAiOjE3NDE5MzM5MjksImlhdCI6MTc0MTkzMzYyOSwiYXV0aF90aW1lIjoxNzQxOTE2ODA4LCJqdGkiOiI0YmEyOWVjOS1iNWYxLTQ4MmItYTA0ZS0zNTI0ODUxYjQ1NmQiLCJpc3MiOiJodHRwczovL2lkLmJsYWtlLXN0YWdpbmcuY29tL3JlYWxtcy9ibGFrZSIsImF1ZCI6WyJyZS1zdHVkZW50IiwiYmxha2UiXSwic3ViIjoiZjpiMDA5MjI5Yi00ZTVjLTQwMDMtYjFhYi03NmRjNzAxNDM0Mjc6cy01ODYyNjA5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmUtc3R1ZGVudCIsInNpZCI6IjQwN2QwNDEzLWQ4NDktNDM5ZC05Y2RkLThiMTA5ZjcyNzVmMyIsInNjb3BlIjoib3BlbmlkIGJsYWtlIiwiZGF0YSI6eyJzY2hvb2xfaWQiOjE5NjQ1MSwiaWQiOjU4NjI2MDksInR5cGUiOiJzdHVkZW50In19.PGKLW_v9d2I-vQcjhBAM14n2yegzGV8y_NK46Tf3GFrd5bMtPKKFZVYdgkx3tM_tpLRxwhp1B9ccftQKsM-XNoDnRPBekS71lUbW8_FUmgtQoIp1mfCPdCn4zl6xvqGUtiIoaZiO045l8CRp6TH9wUSX4CfxgLAw-1M24oksJg81k82-TA8yttLcMs3gNJVhEtIPh9QzBrc3jWKwHQ_sdIFO_hSbzoKeY9URopqMqbIY9j3KCRWMGfuc_k0-vq3MLaDzC4-EuXxNsSeQj1C6b4hzcaOiuToxgUbP2xlVx7tKG1n2GwEO3noMlmdPluB7E9a3D09Ls9QlnH_UBHoMRA'
    //     let getRequest = await request.get('https://api.blake-staging.com/assignments-api/api/v2/student/re/tasks', {
    //       headers: {
    //         Authorization: jwt
    //       }
    //     }
    //     );
    //     let receivedRequest = await getRequest.json();
    //     console.log(receivedRequest);
    //     console.log(receivedRequest.tasks);
        
        //expect(receivedRequest.tasks.assignment_details.lesson_id).toContainText("1");
    //    });