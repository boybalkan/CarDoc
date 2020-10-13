import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  @Input('product') product:any;
  isFav:boolean=false;
   /*
  person = { name: "Audi", country:"A1"};
  marke:string="Audi";
  modell:string="A1";
  baujahr:string="2008-1012";
  motor:string="1.4 TFSI";
  hsnTsn:string="0588/ANX";
  krankheiten:string="Ab 15 gehtnichts mehr";

  storageName:string;
*/
  car = [];
  constructor(private navExtras:DataService, private router:Router, private storage:StorageService) {
    this.car = navExtras.getDataService();
    //console.log(this.car);
   }
  
  ngOnInit() {
  }

  async addToFavorites(car:any){
    this.navExtras.setDataSerivce(this.car);
    if(!this.isFav){
      this.isFav=true;
    }else{
      this.isFav=false;
    }
   
    //this.router.navigateByUrl("favorites");
  }
  /*
  setStorage(car) {
    this.storage.setString('marke', this.marke);
    this.storage.setObject('car', {
      marke:this.marke,
      modell:this.modell,
      baujahr:this.baujahr,
      motor:this.motor,
      hsnTsn:this.hsnTsn,
      krankheiten:this.krankheiten
    });
  }

  getStorage() {
    this.storage.getString('marke').then((data: any) => {
      if (data.value) {
        this.marke = data.value;
      }
    });
    this.storage.getObject('car').then((data: any) => {
      this.car = data;
    });
  }

  clearStorage(){
    this.storage.clear();
  }
  */
}
