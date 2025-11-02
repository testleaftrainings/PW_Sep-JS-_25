
import{test}  from "@playwright/test";
import { ViewLeadPage } from "../pages/06-viewLead";
import LoginData from "../Data/login.json" 
import dotenv from 'dotenv'


dotenv.config({path:"Data/prod.env"})

test(`Login Verification`,async ({page}) => {

    const vp = new ViewLeadPage(page)

    await vp.loadurl(process.env.BaseUrl as string)

    await vp.enterCredentials(LoginData[0].Username,LoginData[0].Password);

    await vp.clickLogin()

    await vp.clickCRM()

    await vp.clickLead()

    await vp.clickCreateLead()

    await vp.enterMandatory()

    await vp.clickSubmit()

    await vp.verifyFirstName()

})