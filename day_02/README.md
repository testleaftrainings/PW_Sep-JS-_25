📑 Agenda for Day 2 - JavaScript Core Concepts & String
🎯 [Focus: Strengthening JavaScript foundations]
 
🕝 Session Highlights
 
1️⃣ Recap of Day 1
* Revisiting Key Takeaways  
 
2️⃣ Understanding Hoisting
* How JavaScript Handles Variables and Functions  
 
3️⃣ Operators & Conditional Statements
* Building Logic and Decision-Making Skills  

## 1. Scoping and Its Types

### 🔹 Definition

Scoping determines where variables and functions are accessible in your code. In JavaScript, scope defines the *lifetime* and *visibility* of a variable.

### 🔹 Types of Scope

1. **Global Scope**

   * Declared outside of functions.
   * Accessible from anywhere in the program.

   ```js
   var globalVar = "I am global";
   console.log(globalVar); // Accessible everywhere
   ```

2. **Function Scope**

   * Variables declared with `var` inside a function are accessible only within that function.

   ```js
   function test() {
     var local = "I am function scoped";
     console.log(local); 
   }
   test();
   // console.log(local); ❌ Error
   ```

3. **Block Scope**

   * Variables declared with `let` and `const` inside `{}` are restricted to that block.

   ```js
   if (true) {
     let blockVar = "I am block scoped";
     console.log(blockVar);
   }
   // console.log(blockVar); ❌ Error
   ```

## 2. Hoisting and Variable Hoisting

### 🔹 Definition

Hoisting is JavaScript’s default behavior of *moving declarations to the top* of the current scope during the compilation phase.

### 🔹 Variable Hoisting

* **`var`** variables are hoisted but initialized with `undefined`.
* **`let`** and **`const`** are hoisted but remain in a *temporal dead zone* (not accessible until declared).

```js
console.log(a); // undefined
var a = 10;

console.log(b); // ❌ ReferenceError
let b = 20;
```

### 🔹 Function Hoisting

Functions declared using the `function` keyword are hoisted completely.

```js
sayHello(); // ✅ Works
function sayHello() {
  console.log("Hello!");
}
```


## 3. Operators

### 🔹 Definition

Operators are special symbols used to perform operations on operands (values and variables).

### 🔹 Types of Operators

1. **Arithmetic**: `+ - * / % ++ --`

   ```js
   let x = 5, y = 2;
   console.log(x + y); // 7
   console.log(x % y); // 1
   ```

2. **Assignment**: `= += -= *= /=`

   ```js
   let a = 10;
   a += 5; // 15
   ```

3. **Comparison**: `== === != !== > < >= <=`

   ```js
   console.log(5 == "5");  // true (loose equality)
   console.log(5 === "5"); // false (strict equality)
   ```

4. **Logical**: `&& || !`

   ```js
   let age = 20;
   console.log(age > 18 && age < 30); // true
   ```

## Conditional Statements

Control the flow of code based on conditions.

- *if statement*: Executes a block of code if a specified condition is true.
- *else statement*: Executes a block of code if the same condition is false.
- *else if statement*: Specifies a new condition to test if the first condition is false.
- *switch statement*: Specifies many alternative blocks of code to be executed.

