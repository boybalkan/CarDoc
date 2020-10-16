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
    this.car  = navExtras.getDataService();
    //console.log(this.car);
    this.addItem();
   
    this.plt.ready().then(() => {
      this.loadItems();      
    });
   }
  
  ngOnInit() {
  }


  async setItem(){
    await Storage.set({
      key:"favCars",
      value: JSON.stringify(this.favCars)
    });

    if(!this.isFav || this.car === null){
      this.showToast('Added to favorites!');
      this.isFav=true;
    }else{
      this.showToast("Removed from favorites!");
      this.isFav=false;
    }    
}

async getItem(): Promise<favCar[]>{
  const products = await Storage.get({key:'products'});
  //console.log(products.value);
  //console.log(JSON.parse(products.value));
  return JSON.parse(products.value);
}
async removeItem(){
  await Storage.remove({key:'products'});
}


  addItem(){
    this.newFavCar.hsnTsn = this.car.hsnTsn;
    this.newFavCar.marke = this.car.marke;
    this.newFavCar.baujahr = this.car.baujahr;
    this.newFavCar.modell = this.car.modell;
    this.newFavCar.motor = this.car.motor;
    this.newFavCar.krankheiten = this.car.krankheiten;
    this.newFavCar.picFront =  this.car.picFront;
    this.newFavCar.picBack = this.car.picBack;
    this.newFavCar.picInside = this.car.picInside;

    this.storageService.addFavCar(this.newFavCar).then(favCar => {
      this.newFavCar = <favCar>{};
      
      this.loadItems();
      //console.log(this.favCars);
      
    });
    //console.log(this.newFavCar);    
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
 

}
