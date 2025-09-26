//Escape sequence
let testType = 'It\'s a regression type';
console.log(testType);
let testTypeUsingDoubleQuotes = "It's a regression type";

let stringType = "Hello, this is a \"double quote\"";
console.log(stringType);
stringType = 'Hello, this is a "double quote"';

//Concatenation
let testcaseName = "Create a new lead";
let testcaseId = 231;
let result = testcaseId + "-" +testcaseName+ ":passed in the last execution";
console.log(result);

//Template literal -> `${testcase}`
let testcases = 2000;
let domain = "banking";
let output = `There are ${testcases} testcases automated in our ${domain} project`;
console.log(output);

//String Methods
//How to get the count of the characters in the string?
let coursename = "Playwright";
console.log(`The length of the string is ${coursename.length}`);

//Find the first character of the given string
console.log(`The first character is ${coursename.charAt(0)}`);
console.log(`The second character from the last is ${coursename.charAt(coursename.length-2)}`);

//indexOf - index of the character
console.log(`The index of a is ${coursename.indexOf('a')}`);
console.log(`The index of z is ${coursename.indexOf('z')}`);
//No match = -1

//includes - true/false
coursename = "Artificial Intelligence";
console.log(`${coursename.includes('gence')}`);
console.log(`${coursename.includes('fcal')}`);

//split
//str.split(separator, limit)
let text = "Qeagle Assurance Limited";
console.log(text.split(" "));
console.log(text.split(""));
console.log(text.split(" ", 2));

//slice
//str.slice(start, end)
text = "Welcome to Testleaf";
console.log(text.slice(0,7));
console.log(text.slice(11));
console.log(text.slice(-8)); //negative indixes - counts from the end
console.log(text.slice(-8,-4));

//substring
//str.substring(start, end)
console.log(text.substring(-5, 4)); //0,4
console.log(text.substring(7, 0)); // (0, 7)  start>end















