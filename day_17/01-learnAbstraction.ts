
//Abstract class

import { reserveBank } from "../day_16/03-learnInterface";


abstract class ElementWrapper{

//0 t0 100% implementation
//Cannot create an object

typeAndTab(locator:string){ // Implemented method
    console.log(`Type in the data and press tab ${locator} comes from implemented method of Abstract Class`);
    
}

abstract takeScreenshot():void // Unimplemented method or method signature

}

/* ********************************************************** */
class Login extends ElementWrapper implements reserveBank { 

// Concrete class extends to asbtract class to create object and call the methods and method signature of abstract class

    takeScreenshot(): void {
        console.log("screenshot for each test comes from implementation of the abstract method inside concrete class");
        
    }

    interestRate(rate:string):void{
        console.log(`Interest rate is ${rate} comes from implementation of the interface`);
        
    }
}

const login = new Login()
login.takeScreenshot()
login.typeAndTab("Userfield")
login.interestRate("7.5")