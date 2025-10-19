/* latitude, longitude --> 40.6971934,-74.3091584 */

import {test  } from "@playwright/test";

test.use({
geolocation:{
    latitude:40.6971934,
    longitude:-74.3091584   
},
permissions:['geolocation']
})

test(`Geo location simulation for Newyork `,async ({page}) => {
    await page.goto("https://www.google.com/maps")
    await page.locator(`#sVuEFc`).click()
    await page.waitForTimeout(3000)

    
    
})