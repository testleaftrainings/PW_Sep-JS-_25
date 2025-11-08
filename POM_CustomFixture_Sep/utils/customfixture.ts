import { test as baseTest} from "@playwright/test"
import { LoginPage } from "../pages/01-loginPage"
import { WelcomePage } from "../pages/02-welcomePage"
import { HomePage } from "../pages/03-homePage"
import { LeadPage } from "../pages/04-leadPage"
import { CreateLeadPage } from "../pages/05-createLead"
import { ViewLeadPage } from "../pages/06-viewLead"

type myFixtures ={
lop:LoginPage,
wp:WelcomePage,
hp:HomePage,
lp:LeadPage,
clp:CreateLeadPage,
vp:ViewLeadPage
}

export const test = baseTest.extend<myFixtures>({

lop:async({page},use)=>{

    const lop = new LoginPage(page)   
    await use(lop) // Line that seperates the start and end of the fixture


},
wp:async({page},use)=>{

    const wp = new WelcomePage(page)
    await use(wp) 

},
hp:async({page},use)=>{

    const hp = new HomePage(page)
    await use(hp) 

},
lp:async({page},use)=>{

    const lp = new LeadPage(page)
    await use(lp) 

},
clp:async({page},use)=>{

    const clp = new CreateLeadPage(page)
    await use(clp) 

},
vp:async({page},use)=>{

    const vp = new ViewLeadPage(page)
    await use(vp) 

}
})