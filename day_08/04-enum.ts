
// enum TestResults {
// Pass=1,// 0
// Fail, // 1
// Skip//2
// }

// function logTestResult(testName:string,result1:TestResults){

//     console.log(`Test:${testName}`,`Result Code: ${result1}`); 

// }

// logTestResult("Login Page", TestResults.Pass)

//String enum

// enum BrowserType {
// Chrome = "chrome",
// Firefox="firefox",
// Edge="msedge"
// }

// function launchBrowser(browserEngine:BrowserType) {

//     console.log(`Launch browser using ${browserEngine}`);
    
// }
// launchBrowser(BrowserType.Edge) // msedge
// launchBrowser(BrowserType.Chrome) // msedge

//Heterogenous enum

enum BrowserStatus {
Open,
Incognito,
Crash="crashed",
Close=5,
Freeze

}

function reportBrowserStatus(status:BrowserStatus) {

    console.log(`Current status of browser is  ${status}`);
    
}
reportBrowserStatus(BrowserStatus.Open) // 0
reportBrowserStatus(BrowserStatus.Crash) // crashed
reportBrowserStatus(BrowserStatus.Close) // 2
