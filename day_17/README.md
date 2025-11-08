📑 Agenda for Day 14: Advanced Playwright Key Features  

🎯 [Focus: Exploring Advanced Features for Enhanced Playwright Automation]  

🕝 Session Highlights  

1️⃣ Shadow DOM  
* Understanding Shadow DOM and its significance in web automation. 

2️⃣ Storage State (Skip Login)  
* Utilizing storage state to bypass login during test execution.  
* Practical examples: Reducing redundant authentication steps.  

3️⃣ Tracing  
* Leveraging tracing for debugging and analyzing test execution.  
* Generating and interpreting trace reports.  

4️⃣ Video Capture  
* Capturing videos of test execution for review and debugging.  
* Configuring video recording options in Playwright.  

5️⃣ Test Annotations  
* Enhancing test readability and control using annotations.  
* Examples: Skipping, focusing, or tagging specific tests.  

6️⃣ Persistent Context
* Understanding persistent browser contexts for maintaining state across tests.
* Examples: Reusing authentication sessions and preserving cookies.

7️⃣ Basic Authentication
* Automating tests with HTTP basic authentication.
* Practical examples: Configuring credentials and validating secure access.

## Table of Contents
- [Storage State Using test.use()](#storage-state-using-testuse)
  - [Example](#example)
  - [Note](#note)
- [Video Capture](#video-capture)
- [Tracing](#tracing) 
- [Persistent Context](#persistent-context) 
- [Hooks](#hooks)

## Storage State Using test.use()

Playwright provides the `test.use()` function to manage browser contexts and their state across tests. This is particularly useful for scenarios where you want to maintain certain states, such as logged-in sessions, across multiple tests.

### Example

```javascript
test.use({ storageState: 'state.json' });

test('Logged-In User Test', async ({ page }) => {
  // Your test code here
});

test('Another Test', async ({ page }) => {
  // Your test code here
});
```

### Note
Ensure to use the correct path to your storage state file.

## Video Capture

To enable video capture in your Playwright tests, you need to configure it in the `context` options.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 1280, height: 720 }
        }
    });

    const page = await context.newPage();
    await page.goto('http://www.leaftaps.com/opentaps');
    // Perform actions on the page

    await browser.close();
})();
```

## Tracing

Tracing helps in debugging your tests by capturing screenshots, console logs, network activity, etc.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    // Start tracing before creating a page
    await context.tracing.start({ screenshots: true, snapshots: true });

    const page = await context.newPage();
    await page.goto('http://www.leaftaps.com/opentaps');
    // Perform actions on the page

    // Stop tracing and save it to a file
    await context.tracing.stop({ path: 'trace.zip' });

    await browser.close();
})();
```
## Persistent Context

To launch a persistent context, which is useful for scenarios where you need to maintain the same browser state across multiple sessions, you can use the `launchPersistentContext` method.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
  const userDataDir = './user-data-dir';
  const browserContext = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    viewport: { width: 1280, height: 720 }
  });

  const page = await browserContext.newPage();
  await page.goto('http://www.leaftaps.com/opentaps');
  // Perform actions on the page

  // Close the context and browser when done
  await browserContext.close();
})();
```
## Hooks

### Overview
- Hooks are special methods in Playwright that are used to set up and tear down test environments.

### Types of Hooks
- **`beforeAll`**: Runs once before all tests in a file.
- **`afterAll`**: Runs once after all tests in a file.
- **`beforeEach`**: Runs before each test.
- **`afterEach`**: Runs after each test.

### Use Cases
- **Setup/Teardown**: Use hooks to initialize and clean up resources (e.g., launching browsers, closing databases).
- **Data Preparation**: Use hooks to prepare test data or reset application state before each test.