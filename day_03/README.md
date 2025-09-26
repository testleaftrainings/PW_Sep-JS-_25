📑 **Agenda for Day 2 - Control Statements, String**
🎯 *_[Focus: Applying Programming Concepts to Solve Real-world Problems]_*
 
🕝 **Session Highlights**  
 
1️⃣ **Recap of Basics**
* Overview of Key Programming Concepts  
 
2️⃣ **Conditional Statements**
* Understanding Logic Flow: if, if-else, switch  
* Nesting and Optimization Tips  
 
3️⃣ **Looping Statements**
* Understanding Loops: for, while, do-while, and forEach
 
4️⃣ **String**
* String Manipulation: Common Methods and Practical Examples  

Here’s the complete **single markdown file** for your request:

# 📘 JavaScript Fundamentals – Quick Reference

## 🔹 1. Switch Statement

### Definition
The `switch` statement is used to evaluate a single expression against multiple possible case values.  
It is an alternative to multiple `if else if` conditions when checking the same variable.

### Syntax
```js
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block
}
````

### Example

```js
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}
```

## 🔹 2. Difference Between Switch and If-Else-If

| Aspect               | Switch Statement                                             | If-Else-If Statement                                       |
| -------------------- | ------------------------------------------------------------ | ---------------------------------------------------------- |
| **Use Case**         | Best for checking one variable against multiple fixed values | Best for complex conditions, ranges, or multiple variables |
| **Syntax**           | Cleaner, structured                                          | Can become lengthy and harder to read                      |
| **Performance**      | Faster for many discrete cases                               | Slower for too many conditions                             |
| **Supports Ranges?** | ❌ No (only discrete values)                                  | ✅ Yes                                                      |

## 🔹 3. Looping Statements and Types

### Definition

Loops are used to repeatedly execute a block of code as long as a condition is true.

### Types

1. **for loop**

   ```js
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

2. **while loop**

   ```js
   let i = 0;
   while (i < 5) {
     console.log(i);
     i++;
   }
   ```

3. **do-while loop**

   ```js
   let i = 0;
   do {
     console.log(i);
     i++;
   } while (i < 5);
   ```

## 🔹 4. Difference Between While and Do-While Loop

| Aspect              | While Loop                                   | Do-While Loop                  |
| ------------------- | -------------------------------------------- | ------------------------------ |
| **Condition Check** | Before execution                             | After execution                |
| **Execution Count** | May run **zero times** if condition is false | Runs **at least once** always  |
| **Syntax**          | `while(condition) { ... }`                   | `do { ... } while(condition);` |


## 🔹 5. Strings in JavaScript

### Definition

A string is a sequence of characters enclosed in single quotes, double quotes, or backticks.

### Ways to Declare Strings

```js
let str1 = "Hello";      // Double quotes
let str2 = 'Testleaf';      // Single quotes
let str3 = `Hello ${str1}`; // Template literal (supports variables & expressions)
```

### Example

```js
let name = "Testleaf";
console.log("Hi " + name);       // Concatenation
console.log(`Hi ${name}`);       // Template literal
```

 