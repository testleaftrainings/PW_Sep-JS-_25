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

/* In playwright the first frame is always the page itself */


test(`Test to interact with frameLocator `,async ({page}) => {
    
await page.goto(`https://leafground.com/frame.xhtml`);

const firstFrame = page.frameLocator(`iframe[src="default.xhtml"]`); // located the frame

const clickButton = firstFrame.locator("#Click") // locate click button inside the frame

    //  page.locator("#Click")

await clickButton.click() // click action on the clickButton

const frameName = page.frame({name:'frame2'})
await frameName?.click('#Click');
})

//Frame interaction using index

test.only(`Handling frames`,async ({page}) => {
    
await page.goto(`https://leafground.com/frame.xhtml`);

//to get all the frames from the page

const allframesDetails = page.frames()// frames method is to get the complete details of the frames present inside a page

//console.log(allframes);//[frame1, frame2, frame3.....]

allframesDetails.forEach((frame,index)=>{

console.log(`Frame ${index} : ${frame.url()}`);

})

await allframesDetails[1].click("button#Click")

await page.waitForTimeout(3000)


})

/* In plaawright the first frame is always the page itself */



