import { test } from "@playwright/test";
import { clear } from "console";

test(`Test to interact with frames `,async ({page}) => {
    
await page.goto(`https://leafground.com/frame.xhtml`);

//Interact with frame using URL

const frameURL = page.frame({url:"https://leafground.com/default.xhtml"})

await frameURL?.locator("#Click").click() // Optional chaining operator works like an if - else block

await page.waitForTimeout(3000)
/*

if(frame){
await frame.locator(#Click).click()
else{
    console.log("Frame not found")
    }
    } */


})

/* In plaawright the first frame is always the page itself */


test.only(`Test to interact with frameLocator `,async ({page}) => {
    
await page.goto(`https://leafground.com/frame.xhtml`);

const firstFrame = page.frameLocator(`iframe[src="default.xhtml"]`); // located the frame

const clickButton = firstFrame.locator("#Click") // locate click button inside the frame

await clickButton.click() // click action on the clickButton



})