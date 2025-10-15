import { test } from "@playwright/test";

test(`Handling frames`, async({page})=>{

    await page.goto(`https://leafground.com/frame.xhtml`)

    //to get all the frames from the page

    const allframes = page.frames(); // frames method is to get the complete details of the frames present in a page

   //   console.log(allframes);

     const frameCount = allframes.length //

     console.log(`The total count of frame in the page is ${frameCount}`);

     await page.title()

     for (let i = 0; i < frameCount; i++) { //index = 0,1,2,3,4 and ends index =4 <5
       const title = await allframes[i].title() 
       console.log(`The title of the frames are ${title}`);    
        
     }
    // await allframes[3].title()
    

    
    
})