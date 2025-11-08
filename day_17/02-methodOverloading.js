var ElementActions = /** @class */ (function () {
    function ElementActions() {
    }
    //Single implementation for both the method signatures    
    ElementActions.prototype.click = function (element, forceClick) {
        if (forceClick) {
            console.log("Forcibly clicking the element ".concat(element));
            //Example : this.page.click(element,{force:true})
        }
        else {
            console.log("Clicking the elment ".concat(element));
        }
    };
    return ElementActions;
}());
var actions = new ElementActions();
//actions.click("#Login") // This will call the first method signature// unimplemented method
actions.click("#Login", true);
