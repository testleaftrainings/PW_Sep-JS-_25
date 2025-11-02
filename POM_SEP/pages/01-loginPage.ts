import { Page } from "@playwright/test";
import { selectors } from "./locators";

export class LoginPage{

    lppage:Page // page reference is set globally

//1St method that gets invoked is the default constructor 
   constructor(pgRef:Page){
    this.lppage=pgRef // lppage is equivalent to your "page" reference (i.e, Page interface used to interact with webelements)
   }

   /* We use constructor here to set the page reference to lppage so that it can be used in all methods like loadurl(), enterCredentials(), clickLogin() */

    async loadurl(url : string) {
        await this.lppage.goto(url) // this.lppage === page
    }

    async enterCredentials(username : string, password : string){
        await this.lppage.fill(selectors.usernameField,username);
        await this.lppage.fill(selectors.PwdField,password)
    }

    async clickLogin(){
        await this.lppage.click(selectors.login_logout)
    }

}


