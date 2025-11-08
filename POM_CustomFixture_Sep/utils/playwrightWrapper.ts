import test, { Page } from "@playwright/test"

export abstract class PWWrapper{

  
 lppage:Page // page reference is set globally

//1St method that gets invoked is the default constructor 
   constructor(pgRef:Page){
    this.lppage=pgRef // lppage is equivalent to your "page" reference (i.e, Page interface used to interact with webelements)
   }
  //IF you have big logic you can write here

    //When you have 2 logic you can use the wrapper method like below :
   async typeAndTab(locator:string,data:string){

    await this.lppage.fill(locator,data)
     await this.lppage.press(locator,"Tab")
   
   }

   async clearandType(locator:string,data:string,name:string){
    try{
        test.step(`CLear the field and enter with ${data} in ${name}`,async () => {
              const ele = this.lppage.locator(locator)
    await ele.clear()
    await ele.fill(data)
        })
    }catch(error){
        console.log(error);
        throw new Error()
        
    }
  
   }

}