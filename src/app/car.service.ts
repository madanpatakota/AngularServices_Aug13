import { EventEmitter, Injectable } from "@angular/core";
import { hydCarService } from "./hydCar.service";

@Injectable()
export class CarService{

     constructor(private hydservice:hydCarService){}
      
    
      getMecsList(){
        return ["John" , "Peter"];
      }



      getAvailableSlots(){
         let morningTime   = "10:00 AM" ;
         let afterNoonTime = "2:00 PM";
         let eveningTime   = "5:00 PM";

         return [morningTime, afterNoonTime , eveningTime];
      }


      moneyEventEmitter = new EventEmitter<any>();
      
      getPaymentDetails(moneyNotify:any){
         this.moneyEventEmitter.emit(moneyNotify);
      }


      getAllInfo(location:string){
         if(location == "Bangolore"){
              return "Cars List : 200000";
         }
         else if(location == "Hyderabad"){
             let info =  this.hydservice.getCarsListofHyderabad(); //"Cars List from Hyd : 1000000";
             return info;
         }
         else{
            return "No service"
         }
         return null;
      }


}