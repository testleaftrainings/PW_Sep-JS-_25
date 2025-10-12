import { test } from "@playwright/test";
import path from "path";

test(`File Download`,async ({page}) => {
    
    await page.goto(`https://leafground.com/file.xhtml`);

    const filePromise = page.waitForEvent("download");

    await page.getByText("Download",{exact:true}).click();

    const fDown = await filePromise // resolving the promise ones after the download action is complete

    //OPtion1 :
  //  await fDown.saveAs("Data/SepPW.png") // setting the path and giving your own name to save the downloaded file
  //  await fDown.saveAs("Data/SepPW.png");
  //  await fDown.saveAs(fDown.suggestedFilename()) // file path not specified it will get saved under root folder


    await fDown.saveAs(`Data/${fDown.suggestedFilename()}`) //save file under Data folder and name should be the original filename
//Option 2

//Downloading the file to Data folder using absolute path of the current file.

//await fDown.saveAs(path.join(__dirname,`../../Data/Absolute.png`))

await fDown.saveAs(path.join(__dirname,`../../Data`,fDown.suggestedFilename()))//save file under Data folderusing absolute path and name should be the original filename
/* 
../-->moving out of day_10 folder
../--> moving out of tests --> this means the control has reached root folder */

 
    //Option3 :

    await fDown.saveAs("D:\\DdriveDownloaded.png")

   await page.waitForTimeout(3000)




})