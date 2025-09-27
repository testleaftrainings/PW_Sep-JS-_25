import { chromium, test} from "@playwright/test";


test(`Learn CSS using Leaftaps`,async ({page}) => {

  /*   const browser = await chromium.launch() // Step1 launching a browser
       
     const context = await browser.newContext() //Step2
    
     const page = await context.newPage() // Step 3 */
    
     await page.goto(`http://leaftaps.com/opentaps/control/main`);

     await page.locator(`input[id="username"]`).fill(`democsr`);

     await page.locator(`input[id="password"]`).fill(`crmsfa`);

     await page.locator(`input[class="decorativeSubmit"]`).click()

     await page.waitForTimeout(3000)    
})