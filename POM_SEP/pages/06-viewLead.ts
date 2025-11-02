import { CreateLeadPage } from "./05-createLead"


export class ViewLeadPage extends CreateLeadPage{
    async verifyFirstName(){
        const fName = await this.lppage.innerText(`#viewLead_firstName_sp`)
        console.log(fName);
        
    }
}