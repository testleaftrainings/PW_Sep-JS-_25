import { expect, test  } from "@playwright/test";

test(`Test to assert the text box`,async ({page}) => {

    await page.goto(`https://leafground.com/input.xhtml`);

    const disabled = page.locator(`//input[@placeholder="Disabled"]`);

    await expect(disabled).toBeDisabled();

    const textBox = page.locator(`//input[@value="Chennai"]`);

    await expect.soft(textBox).toBeDisabled();

    await textBox.fill("India")

    await page.waitForTimeout(3000)


    
})