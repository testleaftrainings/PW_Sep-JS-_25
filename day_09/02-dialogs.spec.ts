import { test } from "@playwright/test";

test(`Test to handle alerts`,async ({page}) => {
    
    await page.goto(`https://leafground.com/alert.xhtml`);

    await page.locator(`(//span[text()="Show"])[1]`).click(); // Simple alert

    await page.waitForTimeout(3000);

    await page.locator(`(//span[text()="Show"])[2]`).click(); //Confirm alert

    await page.waitForTimeout(3000)

    await page.locator(`(//span[text()="Show"])[5]`).click(); // prompt alert

    await page.waitForTimeout(3000)

})



test.only(`Test to handle alerts using page.on`,async ({page}) => {
    
    await page.goto(`https://leafground.com/alert.xhtml`);

    page.on(`dialog`,async(alert)=>{

        const alertMessage = alert.message();
        console.log(`The message inside the alert says ${alertMessage}`);

        const alertType = alert.type();
        console.log(`The alert type is ${alertType}`); 

        if (alertType==='confirm') {
            await alert.accept("")           
        }else
        
       await alert.dismiss()             

    })
    

    await page.locator(`(//span[text()="Show"])[1]`).click(); // Simple alert

    await page.waitForTimeout(3000);    

    await page.locator(`(//span[text()="Show"])[2]`).click(); //Confirm alert

    await page.waitForTimeout(3000)

    await page.locator(`(//span[text()="Show"])[5]`).click(); // prompt alert

    await page.waitForTimeout(3000)

})