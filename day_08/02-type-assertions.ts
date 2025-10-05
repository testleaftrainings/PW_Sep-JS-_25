//Using an angular bracket <>


let firstName : string = "Ravindran"


let response : any = 123 //-> data that comes from your data file like csv, env or from server
let myResponse = <string> response //

console.log(myResponse.length);
/* Type assertion = You change the label (“This is a string”) but the content (a number) remains the same. */
/* At runtime, value is still 100, a number.
The compiler just “assumes” it’s a string, so you won’t get a compile-time error when using .length. */


//Using as keyword

let sCode : any ="Success"

let statusLength = sCode as string
console.log(statusLength.length);
