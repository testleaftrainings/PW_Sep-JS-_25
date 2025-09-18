/**
 * Global scoping
 * Function scoping
 * Block level scoping
 */

var gender = 'female';      //global variable
//To call a function
printGender();

function printGender() {
    var age = 21;           // function scope variable
    console.log('The function scoped variable age is '+ age);  
    if(gender.startsWith('female')) {
        let color = 'pink';   // block scoped variable
        console.log("the color of the card is " +color); 
    }  else {
        console.log("the color of the card is blue"); 
    }
    // console.log("The color of the card calling it out of the if block is " + color);
    
}
// console.log("The function scope variable calling it out of the function - age is " + age);
console.log('The global variable gender is ' + gender);
console.log('The color of the card calling outside the function is ' + color);




