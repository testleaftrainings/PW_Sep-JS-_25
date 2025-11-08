import { HomePage } from "./03-homePage";


export class LeadPage extends HomePage {

    async clickCreateLead(){
        await this.lppage.click(`//a[text()="Create Lead"]`)
    }
}