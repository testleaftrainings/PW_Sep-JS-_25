import { test  } from "@playwright/test";
import path from "path";

//Scenario 1(a): while you have type=file as attribute name and value

test(`Fileaupload with type=file in the DOM as webelement`,async ({page}) => {
    
    await page.goto(`https://leafground.com/file.xhtml`);

    const uploadFile = page.locator(`(//input[@type="file"])[1]`);

    //Option1 : Uploading file from Data folder

   // await uploadFile.setInputFiles("Data/learningFileUpload.txt")
   
//Option2 : Uploading file from Data folder using absolute path

 await uploadFile.setInputFiles([path.join(__dirname,`../../Data/learningFileUpload.txt`)])

  await page.waitForTimeout(3000)
})


//Scenario 1(b): while you have type=file as attribute name and value and upload multiple files

test(`Fileaupload with type=file in the DOM as webelement and upload multiple files`,async ({page}) => {
    
    await page.goto(`https://leafground.com/file.xhtml`);

    const MultipleFile = page.locator(`(//input[@type="file"])[2]`);

    //Option1 : Uploading file from Data folder



    await MultipleFile.setInputFiles(["Data/TestLeaf Logo.png","Data/SepPW.png"])
   
//Option2 : Uploading file from Data folder using absolute path

 //await uploadFile.setInputFiles([path.join(__dirname,`../../Data/learningFileUpload.txt`)])

  await page.waitForTimeout(5000)
})


//Scenario 2: while you don't have type=file as attribute name and value
test(`Fileaupload with no type=file in the DOM as webelement`,async ({page}) => {

    await page.goto(`https://the-internet.herokuapp.com/upload`);

    const filePromise = page.waitForEvent("filechooser") //Used to get the file and upload it into the application after the click() trigger has happened

   await page.locator(`//div[@id="drag-drop-upload"]`).click() // After the click the waitForEvent will look for the file to get it uploaded into the application

   const fileUpload = await filePromise;

   await fileUpload.setFiles("Data/TestLeaf Logo.png")

   await page.waitForTimeout(3000)
    
})




test.only(`Fileupload with type=file in the DOM as webelement and upload multiple files`, async ({ page }) => {
  await page.goto(`https://leafground.com/file.xhtml`);

  const MultipleFile = page.locator(`(//input[@type="file"])[2]`);

  // ✅ Option 2: Uploading file from Data folder using absolute path
  const filePath1 = path.join(__dirname, "../../Data/TestLeaf Logo.png");
  const filePath2 = path.join(__dirname, "../../Data/SepPW.png");

  await MultipleFile.setInputFiles([filePath1, filePath2]);

  await page.waitForTimeout(5000);
});
