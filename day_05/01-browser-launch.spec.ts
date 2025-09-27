import { chromium, firefox, test } from "@playwright/test"

//test.setTimeout(5000)

test(`Test to launch browser`, async()=>{   // asynchronous anonymous arrow function 
  
const browser = await firefox.launch() // Step1 launching a browser

//promise is resolved only when the browser launch is completed
//promise is rejected it will not move to your next step and throw timeour error

 const context = await browser.newContext() //Step2

 const page = await context.newPage() // Step 3

 await page.goto(`http://leaftaps.com/opentaps/control/main`);

 const url = page.url()

 console.log(`The url of the page is ${url}`);
  
}  )   


//test is a keyword from used to implement your predefined test function






