import { Statement } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';
import { Platform, ToastController } from '@ionic/angular';
import { favCar, StorageService } from '../services/storage.service';



const { Storage } = Plugins;

export interface b{value:String};

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  @Input('product') product:any;

   testVlue:string;
  favCars: favCar[] = [];
  newFavCar: favCar = <favCar>{};

  alles:b = <b>{};
  
 
  constructor(private storageService:StorageService, private plt:Platform, private toastController:ToastController) {   
  //  this.plt.ready().then(() => {
   //   this.loadItems();
    //});

    this.getItem();


   }

  ngOnInit() {
  }

  async getItem(){
    const products = await Storage.get({key:'products'});
   
    console.log(JSON.parse(products.value));
  }
/*
  loadItems(){
    this.storageService.getFavCar().then(favCar => {
      this.favCars = favCar;
      console.log(this.favCars);
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  deleteItem(favCar:favCar){
    this.storageService.deleteFavCar(favCar.hsnTsn).then(facCar => {
      this.showToast("FavCar removed!");
    
      this.loadItems();
    });
  }
  */
}
