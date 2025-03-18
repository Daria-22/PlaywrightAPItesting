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
    let jwt = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQaUIxRUtYSEdLaVVjaXV6UDV1dV9uMGp3Yk1lRzBqWlF3V00yREhYd2NjIn0.eyJleHAiOjE3NDE5MzMzNzUsImlhdCI6MTc0MTkzMzA3NSwiYXV0aF90aW1lIjoxNzQxOTE2ODA4LCJqdGkiOiJmYmUyZWNhNi02NjkxLTRjOTctOTFmMC1mYTM0MjIyMzc1ODIiLCJpc3MiOiJodHRwczovL2lkLmJsYWtlLXN0YWdpbmcuY29tL3JlYWxtcy9ibGFrZSIsImF1ZCI6WyJyZS1zdHVkZW50IiwiYmxha2UiXSwic3ViIjoiZjpiMDA5MjI5Yi00ZTVjLTQwMDMtYjFhYi03NmRjNzAxNDM0Mjc6cy01ODYyNjA5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmUtc3R1ZGVudCIsInNpZCI6IjQwN2QwNDEzLWQ4NDktNDM5ZC05Y2RkLThiMTA5ZjcyNzVmMyIsInNjb3BlIjoib3BlbmlkIGJsYWtlIiwiZGF0YSI6eyJzY2hvb2xfaWQiOjE5NjQ1MSwiaWQiOjU4NjI2MDksInR5cGUiOiJzdHVkZW50In19.gIgeBTDpAFRJQ_dLqOiQJ2yobAwcmTzfwhEJCI4s4rbepgy6NTZ3hO1rojSstNaZEnNLN_WDyoV8rm1BkI6nmoA9-Ly_PLFZQBTsL-hpHksLBjkbvn6lc4DHkN6aglcH-L0_9q94dl2hAPZinSeR51E8OHyUQdLC441ZXdNzAGPijqUUDIXhMMt1qpFOr0-0dkVS99u6ChsbTrRWXixCmMffJil_3LPakujwRyvjrmZbqdRm-aN_y_jQ5Q39V176Kli0QHZUsgp4RkZ0ripzE1meBfLsFS6PvDqEA5LQ5tZVOq_vzZg58NiNXuosq1JWKei-NH5ubh1frnvd3vyVTw'
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


    test.only('GET, authentificated user RE, with 1 task', async ({ request }) => 

        {
        let jwt = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQaUIxRUtYSEdLaVVjaXV6UDV1dV9uMGp3Yk1lRzBqWlF3V00yREhYd2NjIn0.eyJleHAiOjE3NDE5MzM5MjksImlhdCI6MTc0MTkzMzYyOSwiYXV0aF90aW1lIjoxNzQxOTE2ODA4LCJqdGkiOiI0YmEyOWVjOS1iNWYxLTQ4MmItYTA0ZS0zNTI0ODUxYjQ1NmQiLCJpc3MiOiJodHRwczovL2lkLmJsYWtlLXN0YWdpbmcuY29tL3JlYWxtcy9ibGFrZSIsImF1ZCI6WyJyZS1zdHVkZW50IiwiYmxha2UiXSwic3ViIjoiZjpiMDA5MjI5Yi00ZTVjLTQwMDMtYjFhYi03NmRjNzAxNDM0Mjc6cy01ODYyNjA5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmUtc3R1ZGVudCIsInNpZCI6IjQwN2QwNDEzLWQ4NDktNDM5ZC05Y2RkLThiMTA5ZjcyNzVmMyIsInNjb3BlIjoib3BlbmlkIGJsYWtlIiwiZGF0YSI6eyJzY2hvb2xfaWQiOjE5NjQ1MSwiaWQiOjU4NjI2MDksInR5cGUiOiJzdHVkZW50In19.PGKLW_v9d2I-vQcjhBAM14n2yegzGV8y_NK46Tf3GFrd5bMtPKKFZVYdgkx3tM_tpLRxwhp1B9ccftQKsM-XNoDnRPBekS71lUbW8_FUmgtQoIp1mfCPdCn4zl6xvqGUtiIoaZiO045l8CRp6TH9wUSX4CfxgLAw-1M24oksJg81k82-TA8yttLcMs3gNJVhEtIPh9QzBrc3jWKwHQ_sdIFO_hSbzoKeY9URopqMqbIY9j3KCRWMGfuc_k0-vq3MLaDzC4-EuXxNsSeQj1C6b4hzcaOiuToxgUbP2xlVx7tKG1n2GwEO3noMlmdPluB7E9a3D09Ls9QlnH_UBHoMRA'
        let getRequest = await request.get('https://api.blake-staging.com/assignments-api/api/v2/student/re/tasks', {
          headers: {
            Authorization: jwt
          }
        }
        );
        let receivedRequest = await getRequest.json();
        console.log(receivedRequest);
        console.log(receivedRequest.tasks);
        
        //expect(receivedRequest.tasks.assignment_details.lesson_id).toContainText("1");
        });