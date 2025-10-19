
Test Annotations  
* Enhancing test readability and control using annotations.  
* Examples: Skipping, focusing, or tagging specific tests.  

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


Storage State Using test.use()
------------------------------

Playwright provides the test.use() function to manage browser contexts and their state across tests. This is particularly useful for scenarios where you want to maintain certain states, such as logged-in sessions, across multiple tests.

Example
test.use({ storageState: 'state.json' });

test('Logged-In User Test', async ({ page }) => {
  // Your test code here
});

test('Another Test', async ({ page }) => {
  // Your test code here
});
Note
Ensure to use the correct path to your storage state file.

Persistent Context
-------------------

To launch a persistent context, which is useful for scenarios where you need to maintain the same browser state across multiple sessions, you can use the launchPersistentContext method.

Example
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


Device Emulation
---------------
Overview

Playwright allows testing on different devices by emulating their characteristics (e.g., screen size, user agent).
Use Cases
Responsive Testing: Test how the application behaves on mobile, tablet, and desktop devices.
Cross-Browser Compatibility: Verify that the application works across different browsers and devices.
Example
const { devices } = require('playwright');
const iPhone = devices['iPhone 12'];

const browser = await chromium.launch();
const context = await browser.newContext({
    ...iPhone,
    locale: 'en-US',
    geolocation: { longitude: 12.4924, latitude: 41.8902 },
    permissions: ['geolocation']
});
const page = await context.newPage();
Geolocation
Overview
Playwright supports geolocation, allowing tests to simulate different geographic locations.

Use Cases
Location-Based Testing: Test applications that provide location-specific content or services.

Geofencing: Verify the behavior of applications that restrict access based on user location.

Example
await context.setGeolocation({ longitude: 12.4924, latitude: 41.8902 });
await page.goto('https://amazon.com');


Console Logs
-----------

Overview
Playwright can capture and analyze console logs from the browser during test execution.

Use Cases
Debugging: Identify errors or warnings in the browser console during tests.

Logging: Track and record important events that occur during test execution.

Example
page.on('console', msg => console.log(msg.text()));
await page.goto('https://redus.in');