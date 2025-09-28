import { expect, test } from "@playwright/test";

test(`Learn to  handle dropdown`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/login`);

   await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Platform")
    
    await page.locator(`//input[@id="username"]`).fill(`democsr`)
    await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.waitForSelector(`//a[contains(text(),'SF')]`)

    await page.locator(`//a[contains(text(),'SF')]`).click()

    await page.locator(`//a[text()="Create Lead"]`).click()

    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(`Testleaf`)

    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`Ravindran`)

    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(`R`)

    //await page.selectOption(`#createLeadForm_dataSourceId`,{value:"LEAD_DIRECTMAIL"})

    await page.selectOption(`#createLeadForm_dataSourceId`,{label:"Direct Mail"})

   // await page.selectOption(`#createLeadForm_dataSourceId`,{index:3})


  const dropdown = page.locator(`#createLeadForm_dataSourceId>option`); // holds 13 webelements

  const dropdownCount = await dropdown.count();

    console.log(`No. of values in the dropdown ${dropdownCount}`);

  for (let index = 0; index <  dropdownCount ; index++) { // Print all the 13 values
   
    console.log( await dropdown.nth(index).innerText());

    /* console.log( dropdown.nth(0).innerText());//--> " "
    console.log( dropdown.nth(1).innerText());// --> "Cold Call"
    console.log( dropdown.nth(2).innerText());//-->"Conference"
    console.log( dropdown.nth(3).innerText());//-->"Direct Mail"
    .
    .
    .*/
    
    
  }

    
    await page.locator(`//input[@class="smallSubmit"]`).click()

    await page.waitForTimeout(3000)
})

/* Classroomn activity:
1, Choose the currency dropdown or country dropdown and print the values */