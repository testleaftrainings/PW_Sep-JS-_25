import { test } from "@playwright/test";

test(`Handling tabs sequential way of handling window`,async ({context,page}) => {

    await page.goto(`https://www.flipkart.com/`);

    await page.locator(`//input[contains(@placeholder,"Search for")]`).fill("Phones")

    //placeholder="Search for products, brands and more"
    const searchBox = page.locator(`//input[@placeholder="Search for Products, Brands and More"]`)
    
    await searchBox.press("Enter");
//Sequential window handling :
    const newPage = context.waitForEvent('page')

    await page.locator(`//div[contains(text(),"MOTOROLA g35")]`).click();

    const childpage = await newPage;

    console.log(await childpage.title());

    console.log(await page.title());

})