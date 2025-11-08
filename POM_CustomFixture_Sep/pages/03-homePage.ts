import { selectors } from "./locators"
import {WelcomePage} from "./02-welcomePage"


export class HomePage extends WelcomePage{

    async clickLead(){
        await this.lppage.click(selectors.LeadMod)
    }


}