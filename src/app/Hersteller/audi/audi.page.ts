import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.page.html',
  styleUrls: ['./audi.page.scss'],
})
export class AudiPage implements OnInit {
  car:any[];
  constructor(private navExtras:DataService) {
    this.car = navExtras.getDataService();
    console.log(this.car);
   }
  
  ngOnInit() {
  }

}
