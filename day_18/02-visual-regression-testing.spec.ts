import { expect, test } from "@playwright/test";

test(`Visual testing`,async ({page}) => {
    
    await page.goto(`https://www.amazon.in/`);

    const oldScreenShot = await page.screenshot({path:'screenshot/amazon_home.png'});

    expect(oldScreenShot).toMatchSnapshot("amazon_home.png")
})


test.only(`Visual testing for an element`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    const ele = page.locator("#username")

    const ss1 = await ele.screenshot({path:'screenshot/leaftaps_login.png'});

    expect(ss1).toMatchSnapshot("leaftaps_login.png")
})


