
import { test } from "@playwright/test";

import credentials from "../../Data/login.json" // credentials is holding 2 data 

/* credentials --> [ TCase1, TCase2 ]*/

test.describe.serial(`Login tests using 2 different data set in serial mode`,async () => {
    
for(  let data of credentials){

test(`Login test using JSON data ${data.TCaseId} `, async ({ page }) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`)

    /* First set of data */
    await page.locator("#username").fill(data.Username) // fill(credentials[0].Username) 

    await page.locator("#password").fill(data.Password) //fill(credentials[0].Password) 

// Second set of data   
// test(`Login test using JSON data`, async ({ page }) => {

//     await page.goto(`http://leaftaps.com/opentaps/control/main`)

//  await page.locator("#username").fill(data.Username) // fill(credentials[1].Username) 

//     await page.locator("#password").fill(data.Password) //fill(credentials[1].Password)
     
})


}
})

// /* Two iteration internal working of "for of" loop

// test(`Login test using JSON data TC001 `, async ({ page }) => {

//     await page.goto(`http://leaftaps.com/opentaps/control/main`)

//     /* First set of data */
//     await page.locator("#username").fill(data.Username) // fill(credentials[0].Username) //DemosalesManager

//     await page.locator("#password").fill(data.Password) //fill(credentials[0].Password) //crmsfa

// // Second set of data   
// // test(`Login test using JSON data TC002`, async ({ page }) => {

// //     await page.goto(`http://leaftaps.com/opentaps/control/main`)

// //  await page.locator("#username").fill(data.Username) // fill(credentials[1].Username) //DemoCSR

// //     await page.locator("#password").fill(data.Password) //fill(credentials[1].Password)//crmsfa
     
// })