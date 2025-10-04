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
var firstName = "Ravindran";
console.log(firstName);
var data = "Message received from the sever";
data = 1234;
data = true;
/* let value : unknown; //similar  to that of any but accompanied by if condition

value=40;
value="Hello";

if (typeof value === "string") {

    console.log(value.toUpperCase());
    
} */
function infiniteLoop() {
    while (true) {
        console.log("Keep looping");
    }
}
infiniteLoop();
