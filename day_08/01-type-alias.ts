

//Union type example - |

let username : string | number

username = "ravi@testleaf.com"
username = 8978979878

type productDatatype = number | string | boolean // productDatatype is an alias name of the datatypes that can refer to all the 3 datatypes

let accountNumber : productDatatype = 456244
accountNumber = "#12436"
accountNumber=false

type supportedBrowsers = "Chrome" | "Firefox"|"msedge"

function invokeBrowsers(browserName:supportedBrowsers) {

if(browserName==="Chrome"){
    console.log("Launch Chrome Browser");   
}else{
    console.log("Firefox browser"); 
    
}
}
//invokeBrowsers("Chrome")
invokeBrowsers("Firefox")

//Intersection type - & - We have to0 mandatorily use all the values that are declared within the types infered 

type Admin ={
adminName : string,
privileges : string[]
}

type Employee = {
name : string,
empId : number,
date:string
}

type QA = Admin & Employee

const userProfileQA : QA ={
adminName : "Testleaf",
privileges : ['server'],
name : "Ravindran",
empId : 1001,
date:"05/10/25"
}

console.log(userProfileQA.adminName); //Testleaf
console.log(userProfileQA.privileges);//['server']

