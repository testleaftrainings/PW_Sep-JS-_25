import { test } from "@playwright/test";
import { parse } from "csv-parse/sync" // convert from csv to json
import fs from "fs" // fs --> file system to read data from your system

test.describe.serial(`Login tests in serial mode`,async()=>{
let records:any[] = parse(fs.readFileSync("Data/login.csv"),{columns:true,skip_empty_lines:true})

for (let data of records) {

  test(`Learn to read data from CSV ${data.tcid}`, async ({ page }) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`)

    await page.locator(`#username`).fill(data.username)
    await page.locator(`#password`).fill(data.password)
  })
}
})
// /* 
// Before conversion in CSV :

// tcid,username,password
// 1,demoSalesmanager,crmsfa
// 2,demoCSR,crmsfa

// After conversion in JSON : 

//    [
//      { 
//       tcid:1,
//       username: "demoSalesManager", 
//       password: "crmsfa" 
//       },
//      { tcid:2,
//       username: "demoCSR", 
//       password: "crmsfa" 
//       }
//    ]