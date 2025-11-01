
/* 1. Public
2. Private.
3. Protected */

export class EmployeeSignUp{

//Properties inside a class:

public eName : string
public static eid : string
protected ephno : number
private eSalary:number 

constructor(){
this.eName="Ravi"
EmployeeSignUp.eid="eid1234"
this.ephno=9809809
this.eSalary=435289
console.log("This is a constructor ");
}

printDetails(){
  //  console.log(`The emp details ${this.eName} : ${this.eid}: ${this.ephno} : ${this.eSalary}`)
  console.log(`The emp details ${this.eName} : ${EmployeeSignUp.eid}: ${this.ephno} : ${this.eSalary}`) // this is accesible inside the clas though the class name. 

}

public get readData(){
    return this.eSalary // get is to read property that are decaled under private access modifiers
}

public set writeData(newSal:number){
    this.eSalary=newSal      // set is to write/ modify the values of the property that are decaled under private access modifiers
}

}


const emp = new EmployeeSignUp() //Constructor created using new keyword
emp.printDetails()

let oldSal = emp.readData
console.log(oldSal);

emp.writeData = 634241
console.log(emp.readData);



