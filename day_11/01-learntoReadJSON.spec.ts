import { test } from "@playwright/test";

import credentials from "../../Data/login.json" //credentials is holding the array of objects

test.describe(`Login tests in serial mode`,async()=>{

for( let data of credentials){

    test(`Learn to read data from JSON ${data.TCaseId} file`,async ({page}) => {
/* First Iteration : The title will be Learn to read data from JSON TC001 file
 Second Iteration : The title will be Learn to read data from JSON TC002 file */
    await page.goto(`http://leaftaps.com/opentaps/control/main`)

    await page.locator("#username").fill(data.Username)
   
    await page.locator("#password").fill(data.Password)

    await page.locator(`.decorativeSubmit`).click()
})
}



})



/* Note for of loop working :
//First Iteration : will execute first in serial mode

test(`Learn to read data from JSON TC001 file`,async ({page}) => 
    await page.goto(`http://leaftaps.com/opentaps/control/main`)

    await page.locator("#username").fill("DemosalesManager")
   
    await page.locator("#password").fill("crmsfa")

    await page.locator(`.decorativeSubmit`).click()
}) 
    
Second Iteration: will second in serial mode

test(`Learn to read data from JSON TC002 file`,async ({page}) => 
    await page.goto(`http://leaftaps.com/opentaps/control/main`)

    await page.locator("#username").fill("DemoCSR")
   
    await page.locator("#password").fill("crmsfa")

    await page.locator(`.decorativeSubmit`).click()
}) 
*/
