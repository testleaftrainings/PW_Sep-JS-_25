import { test } from "@playwright/test";
import { parse } from "csv-parse/sync" // convert from csv to json
import fs from "fs" // fs --> file system to read data from your system

let records:any[] //Global declaration so that it is accessbile thorough all the test blocks
test.use({storageState:`Data/login_LTY.json`})

test.describe.serial(`Login tests in serial mode`,async()=>{

test.beforeAll(`Read data from csv`,async()=>{

  console.log(`BeforeAll Executing ones`);
  
 records = parse(fs.readFileSync("Data/login.csv"),{columns:true,skip_empty_lines:true})
//Data file connectivity done under test.beforAll happens only ones 
})

/* -------------------------------------------------------- */
test.beforeEach(`Login Functionality`,async({page})=>{

  console.log(`Before Each test execution of lead and account module`);
  
    await page.goto(`http://leaftaps.com/opentaps/control/main`)

    // await page.locator(`#username`).fill(records[0].username)
    // await page.locator(`#password`).fill(records[0].password)
    // await page.locator('.decorativeSubmit').click()
    // await page.locator(`text=CRM/SFA`).click() // Welcome page is the Common point for all your modules

    })


  /* Testcase 1 : Lead Creation */

test(`Lead Module`,async({page})=>{
  console.log(`Executing the lead module`);
await page.locator(`text=CRM/SFA`).click()
await page.locator(`//a[text()='Create Lead']`).click()
})

/* Testcase 2 : Account Creation */
test(`Account Module 1`,async({page})=>{
    console.log(`Executing the account module`);
await page.locator(`text=CRM/SFA`).click()
await page.locator(`//a[text()='Create Account']`).click()
    
})

test(`Account Module 2`,async({page})=>{
    console.log(`Executing the account module`);
await page.locator(`text=CRM/SFA`).click()
await page.locator(`//a[text()='Create Account']`).click()
    
})

/* -------------------------------------------------------- */

test.afterEach(`Fetch the test status of each test`,async ({},testinfo) => {
    console.log(`Executing after each test`);
    console.log(testinfo.title);//Lead Module and Account Module
    console.log(testinfo.status); //Passed and Passed 
    
    
})

/* -------------------------------------------------------- */
test.afterAll(`Upload all the attachments`,async () => {
    console.log("Running after all the test");
    console.log(`The report and screenshot are uploaded in test managemne tool`);
    
    
})
})