// tests/LoginWithExcel.spec.ts
import { test } from "@playwright/test";
import * as XLSX from "xlsx";
 
// Function to read Excel data
function getExcelData(filePath: string, sheetName: string) {
 
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet);
}
 
const loginData :any= getExcelData("./Data/excelData.xlsx", "Sheet1");
 
for (const data of loginData) {
 
  
  test(`Login test with username: ${data["username"]}`, async ({ page }) => {
    // await page.goto("http://leaftaps.com/opentaps/control/main");
 console.log(data["username"]);
 console.log(data["password"]);
    // // Fill login form
    // await page.fill("#username", data["username"]);
    // await page.fill("#password", data["password"]);
 
    // // Click login button
   
 
 
  });
}
