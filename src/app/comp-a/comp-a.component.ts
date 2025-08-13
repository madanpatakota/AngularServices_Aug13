import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent {

    constructor(private carService:CarService){
    }

    mecsList : any;
    getMecsList(){
       this.mecsList = this.carService.getMecsList();
    }



}
