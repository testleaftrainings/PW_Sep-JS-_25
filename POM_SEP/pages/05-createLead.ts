import { LeadPage } from "./04-leadPage";


export class CreateLeadPage extends LeadPage{

    async enterMandatory(){
        await this.lppage.fill(`//input[@id="createLeadForm_companyName"]`,"Testleaf")
        await this.lppage.fill(`//input[@id="createLeadForm_firstName"]`,"Ravindran")
        await this.lppage.fill(`//input[@id="createLeadForm_lastName"]`,"R")
    
    }


    async clickSubmit(){
        await this.lppage.click(`.smallSubmit`)
    }

}