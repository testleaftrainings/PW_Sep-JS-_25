📑 Agenda for Day 4 - Get Started with Playwright
🎯 [ Focus: Kickstart Playwright automation with hands-on basics ]
 
1️⃣ Recap  
* Key Takeaways from Day 3  
 
2️⃣ Strings and Arrays
* String Manipulation: Common Methods and Practical Examples  

3️⃣ Understanding Playwright Architecture
* Core Components and How They Interact  
 
4️⃣ Functions

## Types of Functions

JavaScript functions can be classified into several types based on their declaration and usage.

- **Function Declaration**: A standard way to define a function.
    ```javascript
    function add(a, b) {
        return a + b;
    }
    ```
- **Function Expression**: A function can also be defined using an expression and can be anonymous.
    ```javascript
    const multiply = function(a, b) {
        return a * b;
    };
    ```
- **Arrow Function**: A shorter syntax for writing functions, introduced in ES6.
    ```javascript
    const subtract = (a, b) => a - b;
    ```
- **Anonymous Function**: Functions without a name, often used in function expressions.
    ```javascript
    setTimeout(function() {
        console.log("This is an anonymous function");
    }, 1000);
    ```
- **Immediately Invoked Function Expression (IIFE)**: A function that runs as soon as it is defined.
    ```javascript
    (function() {
        console.log("IIFE");
    })();
    ```
- **Constructor Function**: Used to create objects.
    ```javascript
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    const person1 = new Person("Alice", 30);
    ```
## String and Its Methods

Represents a sequence of characters.

- Methods include `.length`, `.charAt()`, `.indexOf()`, `.toUpperCase()`, `.toLowerCase()`, `.substring()`, `.slice()`, `.split()`, `.replace()`, and more.

# Playwright Architecture

Playwright is a node library that provides a high-level API to control web browsers. It facilitates real-time interaction and automation by communicating with browser instances through WebSocket connections and the Chrome DevTools Protocol (CDP).

## Internal Working with WebSockets

Playwright establishes a WebSocket connection to browser instances, enabling it to send commands and receive events in a non-blocking, asynchronous manner. This WebSocket-based communication is crucial for efficiently automating browser operations such as navigation, input, and rendering.
