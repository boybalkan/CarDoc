import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { Platform, ToastController} from '@ionic/angular';
import { DataService } from '../services/data.service';


import { favCar, StorageService } from '../services/storage.service';
const { Storage } = Plugins;

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})


export class CarPage implements OnInit {
  @Input('product') product:any;
  isFav:boolean=false;

  favCars: favCar[] = [];
  newFavCar: favCar = <favCar>{};
  car : favCar = <favCar>{};

  constructor(private navExtras:DataService, private router:Router, private storage:StorageService, private storageService:StorageService, private plt:Platform, private toastController:ToastController) {
    this.car = navExtras.getDataService();
    console.log(this.car);
    
  //  this.plt.ready().then(() => {
      //this.loadItems();
   // });
    //this.setItem();

   }
  
  ngOnInit() {
  }

  async setItem(){
    const cartvalue = JSON.stringify([{
        id:1,
        product:'Apple'
    },{
        id:2,
        product:'Banana'
    },{
        id:3,
        product:'Acoacdo'
    }])

    await Storage.set({
        key:'products',
        value: cartvalue
    });
    await Storage.set({
      key:"favCars",
      value: JSON.stringify(this.car)
    });
    
}
async getItem(){
  const products = await Storage.get({key:'favCars'});
  
  console.log(JSON.parse(products.value));
}
async removeItem(){
  await Storage.remove({key:'products'});
}

/*
  addItem(){
    this.newFavCar.hsnTsn = this.car.hsnTsn;
    this.newFavCar.marke = this.car.marke;
    this.newFavCar.baujahr = this.car.baujahr;
    this.newFavCar.modell = this.car.modell;
    this.newFavCar.motor = this.car.motor;
    this.newFavCar.krankheiten = this.car.krankheiten;

    this.storageService.addFavCar(this.newFavCar).then(favCar => {
      this.newFavCar = <favCar>{};
      this.showToast('Added to Favorites!');
      if(!this.isFav){
        this.isFav=true;
      }else{
        this.isFav=false;
      }
      this.loadItems();
      console.log(this.favCars);
    });
    console.log(this.newFavCar);
  }
  
  deleteItem(favCar:favCar){
    this.storageService.deleteFavCar(favCar.hsnTsn).then(facCar => {
      this.showToast("FavCar removed!");
      if(!this.isFav){
        this.isFav=true;
      }else{
        this.isFav=false;
      }
      //this.myList.closeSlidingItems();
      this.loadItems();
    });
  }

  loadItems(){
    this.storageService.getFavCar().then(favCar => {
      this.favCars = favCar;
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  */

}
