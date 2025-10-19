import { test } from "@playwright/test";

// test.skip(`This will skip test function when the environment is not ready`,async ({page}) => {
//     await page.goto(`http://leaftaps.com/opentaps/control/main`)

//     await page.locator(`#username`).fill(`democsr`)
//     await page.locator(`#password`).fill(`crmsfa`)
//     await page.locator('.decorativeSubmit').click()
//     await page.locator(`text=CRM/SFA`).click()
// })
/* Purpose :
We use this when the test is not ready and the environment is not suitable to execute it*/

// test.fixme(`This will skip test function when the environment is not ready`,async ({page}) => {
//     await page.goto(`http://leaftaps.com/opentaps/control/main`)

//     await page.locator(`#username`).fill(`democsr`)
//     await page.locator(`#password`).fill(`crmsfa`)
//     await page.locator('.decorativeSubmit').click()
//     await page.locator(`text=CRM/SFA`).click()
// })

/* purpose :
1, Test script is not working or is under repair.
2, Convey to your team that this code is to be fixed it will be reminder to fix the code later only
3, Example when you have flakiness and if there is any updtae in the application */

// test.fail 

// test.fail(`This will skip test function when the environment is not ready`,async ({page}) => {
//     await page.goto(`http://leaftaps.com/opentaps/control/main`)

//     await page.locator(`#username`).fill(`democsr`)
//     await page.locator(`#password`).fill(`crmsfa`)
//     await page.locator('.decorativeSubmit').click()
//     await page.locator(`text=CRM/SFA`).click()
// })
/* Purpose :
This will mark the test as expected to fail.
Playwright will ecpect this test to fail :
If it fails, the result is expectedly failed (i.e, not counted as a failure in CI)
If it passes, the result is unexpectedly passed */

// test.slow()

test(`Test annotation to double the timeout`,async ({page}) => {

  //  test.slow() // used to three times the timout --> similr to that of "timeout in configuration file"
    await page.goto(`http://leaftaps.com/opentaps/control/main`)

    await page.locator(`#username`).fill(`democsr`)
    await page.locator(`#password`).fill(`crmsfa`)
    await page.locator('.decorativeSubm').click()
    await page.locator(`text=CRM/SFA`).click()
})
