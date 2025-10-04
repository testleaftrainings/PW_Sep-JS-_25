/* Datatypes:

1. number
2. string
3. boolean
4. undefined.
5. null
6. any
7. unknown
8. never
9. tuple*/

//variableDeclaration varName : datatype = value

let firstName : string = "Ravindran"
console.log(firstName);

let data:any ="Message received from the sever"
data=1234
data=true

/* let value : unknown; //similar  to that of any but accompanied by if condition

value=40;
value="Hello";

if (typeof value === "string") {

    console.log(value.toUpperCase());   
    
} */


function infiniteLoop() : never{

    while(true) {
        console.log("Keep looping");
        
    }
}

infiniteLoop()


//tuple :

let user : [string,number,boolean]=["Testleaf",20,true]
console.log(user[1]);//25
