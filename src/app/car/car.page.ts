import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  @Input('product') product:any;
  
  car:any[];
  constructor(private navExtras:DataService, private router:Router) {
    this.car = navExtras.getDataService();
    //console.log(this.car);
   }
  
  ngOnInit() {
  }

  addToFavorites(car:any){
    this.navExtras.setDataSerivce(this.car);
    this.router.navigateByUrl("favorites");
  }

}
