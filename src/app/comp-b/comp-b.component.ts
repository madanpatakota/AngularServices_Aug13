import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent {
    Timings:any;
    paymentB:any;
    getCarsList:any;

   constructor(private carservice:CarService){
      this.Timings =  this.carservice.getAvailableSlots();

      this.carservice.moneyEventEmitter.subscribe((result)=>{
             console.log("Comp B " + result);
             this.paymentB = result;
      })
   }

   evtGetHydList(){
     this.getCarsList =  this.carservice.getAllInfo("Hyderabad");
   }







}
