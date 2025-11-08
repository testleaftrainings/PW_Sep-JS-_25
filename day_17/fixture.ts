
import {test as baseT } from "@playwright/test"

export const test = baseT.extend({

page:async({browser},use)=>{
    const page = await browser.newPage()
    await page.goto("http:www.google.com")
   await use(page) // Line that seperates the start and end of the fixture

    await page.close()
}
})