"use strict";
/* 1. Create an enum named `Environment` with four values representing different stages
of a software development process: `LOCAL`, `DEVELOPMENT`, `STAGING`, `PRODUCTION`. */
Object.defineProperty(exports, "__esModule", { value: true });
var Environment;
(function (Environment) {
    Environment["LOCAL"] = "Local";
    Environment["DEVELOPMENT"] = "Development";
    Environment["STAGING"] = "Staging";
    Environment["PRODUCTION"] = "Production";
})(Environment || (Environment = {}));
/*2. Write a function named `runTests` that accepts an argument of type `Environment`. The */
function runTests(env) {
    console.log("Running tests in ".concat(env, " environment "));
}
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
