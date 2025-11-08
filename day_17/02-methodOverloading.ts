
class ElementActions{

    public click(element:string):void // Method signature 1

    public click(element:string, forceClick:boolean):void // Method signature 2

//Single implementation for both the method signatures    
    public click(element:string,forceClick?:boolean):void {
        if(forceClick){
            console.log(`Forcibly clicking the element ${element}`);
            //Example : this.page.click(element,{force:true})
           }
        else{
            console.log(`Clicking the elment ${element}`);
        } 
        
    }}

const actions = new ElementActions()
//actions.click("#Login") // This will call the first method signature// unimplemented method
actions.click("#Login",true)