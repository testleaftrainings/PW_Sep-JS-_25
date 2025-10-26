//POSTMAN data of Service Now :

//endpoint
//Authorization
//Headers
//Request Body 


import { expect, test } from "@playwright/test";

let id : any

test.describe.serial(`Service Now`,async () => {
    
test(`Creating Incident using Playwright with API`, async ({ request }) => {

    const response = await request.post("https://dev224307.service-now.com/api/now/table/incident",

        {
            headers: {
                "Authorization": "Basic YWRtaW46NmFCJUk5RUsqY2ph", // Base64 encoding
                "Content-Type": "application/json"
            },
            data: {
                "short_description": "Network Issue Created through Playwright",
                "description": "Network Issue"
            }
        }
    )


const reponseBody = await response.json() //→ JSON string ➜ object
//console.log(reponseBody);

 //  Assert status code
    expect(response.status()).toBe(201);

    // Assert status text
    expect(response.statusText()).toBe("Created");

id =   reponseBody.result.sys_id
console.log(`The incident id is ${id}`);
})

//Fetch created lead
test(`Fetch the Created Incident using Playwright with API`, async ({ request }) => {

    const response = await request.get(`https://dev224307.service-now.com/api/now/table/incident/${id}`,

        {
            headers: {
                "Authorization": "Basic YWRtaW46NmFCJUk5RUsqY2ph", // Base64 encoding
                "Content-Type": "application/json"
            }
        }
    )


const repons = await response.json() //→ JSON string ➜ object
console.log(repons);

console.log(response.status());
console.log(response.statusText());

   // Assert status code
    expect(response.status()).toBe(200);

    // Assert status text
    expect(response.statusText()).toBe("OK");
})

//Update created lead
test(`Update the Created Incident using Playwright with API`, async ({ request }) => {

    const response = await request.patch(`https://dev224307.service-now.com/api/now/table/incident/${id}`,

        {
            headers: {
                "Authorization": "Basic YWRtaW46NmFCJUk5RUsqY2ph", // Base64 encoding
                "Content-Type": "application/json"
            },
            data: {
                "short_description": "Updated Network Issue",
                "location": "Chennai"
            }
        }
    )


const res = await response.json() //→ JSON string ➜ object
console.log(res);

console.log(response.status());
console.log(response.statusText());

//    // Assert status code
     expect(response.status()).toBe(200);

//     // Assert status text
     expect(response.statusText()).toBe("OK");
})

})
