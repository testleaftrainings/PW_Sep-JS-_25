//import {test} from "@playwright/test"

import {test} from "./fixture"

test(`Using Custom FIxture`,async ({page}) => {

console.log(await page.title());

})
    
