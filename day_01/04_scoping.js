var gender = 'female';              //global variable
function printGender() {
    var age = 28;                   //function scoped variable
    if(gender.startsWith('female')) {
        let cardColor = 'pink';     // block scoped variable
        console.log('The cardColor is ' + cardColor);
    } else {
        console.log('The card color is blue');    
    }
    console.log('The age is ' + age); 
    console.log('The cardColor is from outside the if block ' +cardColor);
    
}
console.log('The gender is ' + gender);
// console.log('The age is from outside the function block ' + age);


//To call a function
printGender();


