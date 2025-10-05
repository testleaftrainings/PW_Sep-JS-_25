
let user : { // user is an object
    firstName : string,
    lastName : string,
    email : string
}={
    firstName : "Ravindran",
    lastName : "R",
    email : "ravi@testleaf.com"
}

//To access the different properties , you can use dot notation

//objectName.property

console.log(user.firstName); // Ravindran
console.log(user.lastName);//R
console.log(user.email); // ravi@testleaf.com


let user1 : { // user is an object
    "first-Name" : string,
    lastName : string,
    email : string
}={
    "first-Name" : "Ravindran",
    lastName : "R",
    email : "ravi@testleaf.com"
}

//To access the different properties , you can use square bracket notation

//objectName[property name witj special character]

console.log(user1["first-Name"]); // Ravindran
console.log(user1.lastName);//R
console.log(user1.email); // ravi@testleaf.com



