//Switch statement

let browser = 'safari';
getVersion();
function getVersion() {
    switch (browser) {
        case 'chrome':
            console.log("140");
            //return --> returns back the value to the function, you can reuse the value in the code later
            // return "140"
            break;
        case 'msedge':
            console.log("141");
            // return "141"
            break;
        case 'safari':
            console.log("17");
            // return "17"
            break;
        case 'firefox':
            console.log("128");
            break;         
        default:
            console.log("Unsupported browser");            
            break;
    }
}
