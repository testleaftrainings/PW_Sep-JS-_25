export interface EleAction {
    type(locator:string):void
    //method signature --> unimplemented
}

export interface PgAction{
    handleWindow():void
}


//Concrete class 
export class webElement implements EleAction,PgAction{

    type(locator:string){
        console.log(`Login locator ${locator}`);        
    }

    handleWindow(){
    console.log("Handle Window");
    }
}

const ob = new webElement()
ob.type
