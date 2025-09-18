// function getBrowser() {
//     if(browserName==="chrome") {
//         console.log("Launch browser");        
//     } else {
//         console.log("Unsupported browser");
//     }
// }
// let browserName = "edge"
// getBrowser();

//Multiple conditions
function getBrowserVersion() {
    if(browser==='chrome') {
        return 140;
    } else if (browser==='edge') {
        return 140;
    } else if (browser==='safari') {
        return 18;
    } else if (browser==='firefox') {
        return 120;
    } else {
        return 'Unsupported browser'
    }
}
let browser = 'safari';
//Function Expression
let browserFunction = getBrowserVersion();
console.log(browserFunction);
//Function call
getBrowserVersion();
