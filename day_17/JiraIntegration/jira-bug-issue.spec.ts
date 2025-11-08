import { test } from "@playwright/test";
import { logADefectInJira } from "./after-hooks-jira-tickets";

test("Test to record tracing a specific bug",async ({page}) => {
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

test.afterEach(async({},testInfo)=>{
 //   console.log(testInfo.status);// passed, failed, timedOut

    await logADefectInJira(testInfo)


    
})