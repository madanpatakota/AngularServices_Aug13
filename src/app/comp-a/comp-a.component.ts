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
    carsListInfo :any;
    getMecsList(){
       this.mecsList = this.carService.getMecsList();
    }

    evtSendMoney(){
      let yourPaymentAmount = "1000Rs";
      this.carService.getPaymentDetails(yourPaymentAmount);
    }

    getInfoOfBangolore(){
        this.carsListInfo = this.carService.getAllInfo("Bangolore");  //"Cars List : 200000";
    }






}
