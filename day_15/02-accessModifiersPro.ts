
import {EmployeeSignUp } from "./01-accessModifiers"
import { FakerData } from "./fakerstatic";


class HR extends EmployeeSignUp {

    empUpdate(){
     //   this.ephno= 66787856 // you can reqrite the phone number or pront the number
    console.log(this.ephno);
    console.log(EmployeeSignUp.eid);
    console.log(FakerData.getFirstName()); 
    
    
    }
}

let emp = new HR()
emp.empUpdate()