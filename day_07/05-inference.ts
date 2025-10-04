

let num = 40; // implicit inference
let message : string = "Hello"// explicit inference


function funName1(a:number,b:number) : any { // explicit inference
    let c=a+b;
    //return c
    console.log(c);  
        
}

//console.log(funName1(10,20)) // 30

funName1(10,20)