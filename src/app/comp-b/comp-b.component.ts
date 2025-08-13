import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent {
    Timings:any;
   constructor(private carservice:CarService){
      this.Timings =  this.carservice.getAvailableSlots();
   }
}
