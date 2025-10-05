/* 1. Create an enum named `Environment` with four values representing different stages 
of a software development process: `LOCAL`, `DEVELOPMENT`, `STAGING`, `PRODUCTION`. */

import { run } from "node:test";

enum Environment {

    LOCAL ="Local",
    DEVELOPMENT="Development",
    STAGING="Staging",
    PRODUCTION="Production"
}

/*2. Write a function named `runTests` that accepts an argument of type `Environment`. The */

function runTests(env:Environment):void{
    console.log(`Running tests in ${env} environment `);
    
}

runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING)