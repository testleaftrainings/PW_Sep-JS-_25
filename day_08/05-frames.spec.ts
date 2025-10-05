import { test } from "@playwright/test";
import { clear } from "console";

test(`Handling frames`,async ({page}) => {
    
await page.goto(`https://www.oneindia.com/`);

//to get all the frames from the page

const allframes = page.frames()// frames method is to get the complete details of the frames present inside a page

//console.log(allframes);//[frame1, frame2, frame3.....]

const frameCount= allframes.length
console.log(frameCount);

for (let index = 0; index < frameCount; index++) {    
    const title = await allframes[index].title()// [allframe[0]=frame1, frame2, frame3.....]=> 42 frames
    console.log(`The title of the frames are ${title}`);    
}

})

/* In plaawright the first frame is always the page itself */