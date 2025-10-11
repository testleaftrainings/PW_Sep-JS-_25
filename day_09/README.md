📑 Agenda for Day 10: Handling Frames & Windows and Test Data Parameterization

🎯 [Focus: Understanding to interact with frames and windows]  

🕝 Session Highlights

1️⃣ Recap
* Quick review of key learnings from previous sessions.  

2️⃣ Interaction with Frames 
* Understanding the concept of iframes in web applications.  
* Navigating into and interacting with elements inside frames.  

3️⃣ Handling Multiple Windows / Tabs  
* Managing multiple windows or tabs in Playwright.  
* Switching between windows and tabs efficiently.  

4️⃣ Test Data Parameterization
* Utilizing .env files for environment-specific data.  
* Handling test data using .csv and .json files.  
* Examples: Parameterizing test cases for data-driven testing.  

## Table of Contents

1. **[Interacting with Frames](#interacting-with-frames)**
   - [By Index](#by-index)
   - [By Name](#by-name)
   - [By URL](#by-url)
   - [By ID using frameLocator](#by-id-using-framelocator)
   - [Main Frame](#main-frame)

2. **[Handling Multiple Windows (Pop-ups)](#handling-multiple-windows-pop-ups)**
   - [Sequential Approach](#sequential-approach)
   - [Promise.all for Multiple Windows](#promiseall-for-multiple-windows)
   - [waitForEvent('page')](#waitforeventpage)

## Interacting with Frames

Handling frames is essential for working with web pages that contain multiple embedded documents.

### By Index

```javascript
// Accessing the first frame on the page by its index
const frameByIndex = page.frame({ index: 0 });
console.log(await frameByIndex.title());
```

### By Name

```javascript
// Accessing a frame by its name attribute
const frameByName = page.frame({ name: 'frameName' });
console.log(await frameByName.title());
```

### By URL

```javascript
// Finding a frame by its source URL
const frameByUrl = page.frame({ url: /leaftaps.com/path/ });
console.log(await frameByUrl.title());
```

### By ID using frameLocator

```javascript
// Utilizing frameLocator to access a frame by the ID of the iframe element
const frameById = page.frameLocator('#frameID').frame();
console.log(await frameById.title());
```

### Main Frame

```javascript
// Focusing on the main frame
const mainFrame = page.mainFrame();
console.log(await mainFrame.title());
```

## Handling Multiple Windows (Pop-ups)

Managing multiple windows is vital for comprehensive testing, particularly for applications that open new tabs or windows.

### Sequential Approach

```javascript
// Sequentially handling new windows
    const windowPromise = context.waitForEvent('page');
    await page.getByText("Open",{exact:true}).click();
    const window = await windowPromise;
```

### Promise.all for Multiple Windows

```javascript
// Coordinating the opening of several windows simultaneously
const [window1, window2] = await Promise.all([
    context.waitForEvent('page'),
    context.waitForEvent('page'),
    page.click('#open-first-window'),
    page.click('#open-second-window')
]);
```

### waitForEvent('page')

```javascript
// Detecting a new page following an action
const newPage = await context.waitForEvent('page');
page.click('#open-new-window');
```
