import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {

  car:any[];
  constructor(private navExtras:DataService) {
    this.car = navExtras.getDataService();
    console.log(this.car);
   }
  
  ngOnInit() {
  }

}
