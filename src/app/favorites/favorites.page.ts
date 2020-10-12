import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  @Input('product') product:any;

  favCars:any[] = [];
  allFavCars:any[] ; 
  /*[
    {marke:"Audi",modell: "A1",  baujahr: "2014-2018", motor: "1.4 TFSI", hsnTsn: "0588/ANX", krankheiten:"Ab 15000km Lüftung im Arsch"},
    {marke:"Audi",modell: "A2",  baujahr: "2014-2018", motor: "1.4 TFSI", hsnTsn: "0588/ANX", krankheiten:"Ab 15000km Lüftung im Arsch"}
  ];*/
 
  constructor(private cars:DataService, private router:Router) {
    this.favCars.push( cars.getDataService());
    console.log(this.favCars);
    //console.log(this.car);
    this.allFavCars = this.favCars;
   }

  ngOnInit() {
  }

  

}
