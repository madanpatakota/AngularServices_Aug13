import { Injectable } from "@angular/core";

@Injectable()
export class CarService{
      
    
     getMecsList(){
        return ["John" , "Peter"];
      }



      getAvailableSlots(){
         let morningTime   = "10:00 AM" ;
         let afterNoonTime = "2:00 PM";
         let eveningTime   = "5:00 PM";

         return [morningTime, afterNoonTime , eveningTime];
      }


}