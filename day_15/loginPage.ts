import { chromium, Page } from "@playwright/test";

class LoginPage{

    lppage : Page // page reference is set globally

//1St method that gets invoked is the default constructor 
   constructor(lpage:Page){
    this.lppage=lpage // lppage is equivalent to your "page" reference (i.e, Page interface used to interact with webelements)
   }

   /* We use constructor here to set the page reference to lppage so that it can be used in all methods like loadurl(), enterCredentials(), clickLogin() */

    async loadurl(url : string) {
        await this.lppage.goto(url) // this.lppage === page
    }

    async enterCredentials(username : string, password : string){
        await this.lppage.fill("#username",username);
        await this.lppage.fill("#password",password)
    }

    async clickLogin(){
        await this.lppage.click(".decorativeSubmit")
    }

    async closeBrowser(){
        await this.lppage.close()
    }
}

async function doLogin(){
    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext();
    const page = await context.newPage()
    
const login = new LoginPage(page) // "page reference passed through the Constructor 

await login.loadurl(`http://leaftaps.com/opentaps/control/main`)

await login.enterCredentials("demoCSR","crmsfa")

await login.clickLogin()

await login.closeBrowser()
}
doLogin()