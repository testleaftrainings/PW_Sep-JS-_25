import { test } from "@playwright/test";
import dotenv from "dotenv"

let filename = process.env.envFile || 'qa'
/*  
FirstCase :
let filename = process.env.qa

SecondCase : Setting the environmet through the terminal using the command : $env:envFile='prod'
let filename = process.env.prod '*/ // from the terminal

dotenv.config({path:`Data/${filename}.env`})

test(`Learn to read data from env file`, async ({ page }) => {

     console.log(process.env.BaseUrl);
    console.log(process.env.LF_Username);
     console.log(process.env.LF_Password);

    await page.goto(process.env.BaseUrl as string) //typeassertion to communicate to typescript compiler that the value that comes from .env file is going to a string value


    await page.locator(`#username`).fill(process.env.LF_Username as string)
    await page.locator(`#password`).fill(process.env.LF_Password as string)
    await page.locator(`.decorativeSubmit`).click()
  })


// /* Notes:
// import { test } from "@playwright/test";
// import dotenv from "dotenv"

// //let filename = process.env.qa

// //dotenv.config({path:`Data/qa.env`})

// test(`Learn to read data from env file`, async ({ page }) => {

//    // await page.goto(`http://leaftaps.com/opentaps/control/main`)

//    console.log(process.env.BaseUrl);//Throws undefined cause environment path is not specified
//     console.log(process.env.LF_Username);//Throws undefined cause environment path is not specified
//      console.log(process.env.LF_Password);//Throws undefined cause environment path is not specified
//       console.log(process.env.username); // system environment and fetching the usernamer of my system 


//    /*  await page.locator(`#username`).fill(data.username)
//     await page.locator(`#password`).fill(data.password) */
//   }) 
