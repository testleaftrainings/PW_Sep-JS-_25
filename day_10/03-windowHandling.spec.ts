import { test } from "@playwright/test";

test(`Handling tabs sequential way of handling window`,async ({context,page}) => {

    await page.goto(`https://www.flipkart.com/`);

    await page.locator(`//input [contains(@placeholder,"Search for")]`).fill("Phones")

    //placeholder="Search for products, brands and more"
    const searchBox = page.locator(`//input[@placeholder="Search for Products, Brands and More"]`)
    
    await searchBox.press("Enter");
//Sequential window handling :
    // const newPage = context.waitForEvent('page')// Action1 to capture the page

    // await page.locator(`//div[contains(text(),"MOTOROLA g35")]`).click(); // Action 2 to click the button to open the new page

    // const childpage = await newPage;

//Concurrent window handling :

const  [childpage] = await Promise.all([context.waitForEvent('page'),page.locator(`//div[contains(text(),"MOTOROLA g35")]`).click()])

    console.log(await childpage.title());

    console.log(await page.title());

    await page.bringToFront(); // brings the parent page to the front

    await page.waitForSelector(`//span[text()="Electronics"]`)

    await page.locator(`//span[text()="Electronics"]`).click()

})

test.only(`Handling Multiple Pages`,async ({context,page}) => {
    await page.goto(`https://leafground.com/window.xhtml`);

    await Promise.all([context.waitForEvent('page'), page.getByText(`Open Multiple`,{exact:true}).click()])

    await page.waitForLoadState("domcontentloaded")

    const allPages = context.pages();

    console.log(allPages.length);
    

    console.log(await allPages[0].title())
    console.log(await allPages[1].title())
    console.log(await allPages[2].title())


})

