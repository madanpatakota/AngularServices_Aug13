import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent {

  paymentC :any;
  constructor(private carservice:CarService){
      this.carservice.moneyEventEmitter.subscribe((result)=>{
          console.log("From Compc" + result);
          this.paymentC = result;
      })
  }

}
