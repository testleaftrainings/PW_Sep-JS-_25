import { test} from "@playwright/test";

test(`CSS handling`,async({page})=>{


await page.goto(`https://login.salesforce.com/?locale=in`);

//await page.locator("#username").fill(`democsr`);

//await page.locator(`.inputLogin`).nth(0).fill(`demosalesmanager`); // username using nth method

await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`); // username using first method

await page.locator(`#password`).fill(`RaviSalesforce#1234`); // password

await page.locator(`#Login`).click();

await page.waitForTimeout(3000)





})