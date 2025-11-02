import { selectors } from "./locators";
import { LoginPage } from "./01-loginPage";


export class WelcomePage extends LoginPage {

    async clickCRM(){
        await this.lppage.locator(selectors.crmLink).click()
    }

    async clickLogout(){
        await this.lppage.locator(selectors.login_logout).click()
    }

}