import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  @Input('product') product:any;

  favCars:any[] = [];
  allFavCars:any[] = 
  [
    {marke:"Audi",modell: "A1",  baujahr: "2014-2018", motor: "1.4 TFSI", hsnTsn: "0588/ANX", krankheiten:"Ab 15000km Lüftung im Arsch"},
    {marke:"Audi",modell: "A2",  baujahr: "2010-2012", motor: "1.6 TDI", hsnTsn: "0588/ANX", krankheiten:"Ab 15000km Lüftung im Arsch"}
  ];
 
  constructor(private cars:DataService, private router:Router, private storage:StorageService) {
    //this.favCars = cars.getDataService();
    //this.setStorage(JSON.stringify( this.favCars));
    //console.log(this.car);
    
    //this.allFavCars.push(this.favCars);
    
    //this.allFavCars=this.favCars;
    //this.getStorage();
    console.log(this.allFavCars);
    
   }

  ngOnInit() {
  }

  getStorage() {
    this.storage.getObject('car').then((data: any) => {
      this.allFavCars = data;
    });
    console.log(this.allFavCars);
  }

  setStorage(car:any) {
    
    this.storage.setObject('car', {
      marke:car.marke,
      modell:car.modell,
      baujahr:car.baujahr,
      motor:car.motor,
      hsnTsn:car.hsnTsn,
      krankheiten:car.krankheiten
    });
  }

}
