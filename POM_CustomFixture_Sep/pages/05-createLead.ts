import { faker } from "@faker-js/faker";
import { LeadPage } from "./04-leadPage";


export class CreateLeadPage extends LeadPage {

    async enterMandatory() {
        await this.lppage.fill(`//input[@id="createLeadForm_companyName"]`, "Testleaf")
        await this.lppage.fill(`//input[@id="createLeadForm_firstName"]`, "Ravindran")
        await this.lppage.fill(`//input[@id="createLeadForm_lastName"]`, "R")
        // await this.lppage.fill(`//input[@id="createLeadForm_companyName"]`,faker.company.buzzNoun(),)
        // await this.lppage.fill(`//input[@id="createLeadForm_firstName"]`,faker.person.firstName())
        // await this.lppage.fill(`//input[@id="createLeadForm_lastName"]`,faker.person.lastName())

    }


    async clickSubmit() {
        await this.lppage.click(`.smallSubmit`)
    }

}