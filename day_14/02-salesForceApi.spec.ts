//POSTMAN data of Salesforce :

//endpoint
//Authorization
//Headers
//Request Body


import { test } from "@playwright/test";

let token: any
let inst_url: any
let tokenType: any
let id : any

test.describe.serial(`Salesforce API Testing`,async () => {
    
test(`Generate a token`, async ({ request }) => {

    const reponse = await request.post(`https://login.salesforce.com/services/oauth2/token`,

        {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            form: {
                "client_id": "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB",
                "client_secret": "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260",
                "username": "ravindran.ramdas@testleaf.com",
                "password": "RaviSalesforce#1234",
                "grant_type": "password"
            }

        }
    )

    const reponseBody = await reponse.json()
    console.log(reponseBody);

    console.log(reponse.status());
    console.log(reponse.statusText());

    token = reponseBody.access_token

    inst_url = reponseBody.instance_url

    tokenType = reponseBody.token_type


})

test(`Create a Lead in Salesforce`, async ({ request }) => {

   const response =  await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead/`,

        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            },
            data: {
                "FirstName":"RavindranPlay",
                "LastName": "RPlat",
                "Company": "TestleafPlayAutomation"
            }

        }
    )

    const responseBodyPost = await response.json()
  //  console.log(responseBodyPost);

    id = responseBodyPost.id
    console.log(id);
    


    
})


test(`Fetch a specific Lead in Salesforce`, async ({ request }) => {

   const res =  await request.get(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,

        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            }
        }
    )

    const responseBodyGet = await res.json() 
// Here "responseBodyGet" JavaScript Object not a value and cannot be used inside Template literal which habndles onlt string datatype
    console.log(responseBodyGet);

    console.log(res.status());
    console.log(res.statusText());
    
    
})
})





