import { test } from "@playwright/test";

test(`Learn to use Xpath`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/login`);

    await page.locator(`//input[@id="username"]`).fill(`democsr`)
    await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.waitForTimeout(3000)
})