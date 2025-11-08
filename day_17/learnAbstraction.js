"use strict";
//Abstract class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ElementWrapper = /** @class */ (function () {
    function ElementWrapper() {
    }
    //0 t0 100% implementation
    //Cannot create an object
    ElementWrapper.prototype.typeAndTab = function (locator) {
        console.log("Type in the data and press tab ".concat(locator, " comes from implemented method of Abstract Class"));
    };
    return ElementWrapper;
}());
/* ********************************************************** */
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Concrete class extends to asbtract class to create object and call the methods and method signature of abstract class
    Login.prototype.takeScreenshot = function () {
        console.log("screenshot for each test comes from implementation of the abstract method inside concrete class");
    };
    Login.prototype.interestRate = function (rate) {
        console.log("Interest rate is ".concat(rate, " comes from implementation of the interface"));
    };
    return Login;
}(ElementWrapper));
var login = new Login();
login.takeScreenshot();
login.typeAndTab("Userfield");
login.interestRate("7.5");
