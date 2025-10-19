import { test } from "@playwright/test";

test(`Login Functionality`,async({page})=>{

     await page.goto(`http://leaftaps.com/opentaps/control/main`)

    await page.locator(`#username`).fill(`democsr`)
    await page.locator(`#password`).fill(`crmsfa`)
    await page.locator('.decorativeSubmit').click()
    await page.locator(`text=CRM/SFA`).click() // Welcome page is the Common point for all your modules
    await page.context().storageState({path:"Data/login_LTY.json"})//Captured the session storage details
    })