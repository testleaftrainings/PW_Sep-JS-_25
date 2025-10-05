//Union type example - |
var username;
username = "ravi@testleaf.com";
username = 8978979878;
var accountNumber = 456244;
accountNumber = "#12436";
accountNumber = false;
function invokeBrowsers(browserName) {
    if (browserName === "Chrome") {
        console.log("Launch Chrome Browser");
    }
    else {
        console.log("Firefox browser");
    }
}
//invokeBrowsers("Chrome")
invokeBrowsers("Firefox");
