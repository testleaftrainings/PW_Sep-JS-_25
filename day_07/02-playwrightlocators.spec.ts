import { test } from "@playwright/test";

test(`Learning playwright locators`,async ({page}) => {

    await page.goto(`https://login.salesforce.com/?locale=in`);

    await page.getByLabel("Username").fill("ravindran.ramdas@testleaf.com") // normal DOM values



    //await page.getByRole("textbox",{name:"Username"}).fill("ravindran.ramdas@testleaf.com")
    await page.getByRole("textbox",{name:"Password"}).fill("RaviSalesforce#1234");
    await page.getByRole("button",{name:"Log In"}).click()

    await page.getByTitle("App Launcher",{exact:true}).click();

    await page.getByText("View All",{exact:true}).click()

    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Service")
    await page.waitForTimeout(3000)
})