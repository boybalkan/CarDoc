import { Statement } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';
import { Platform, ToastController } from '@ionic/angular';
import { favCar, StorageService } from '../services/storage.service';

import { CarPage } from '../car/car.page';



const { Storage } = Plugins;


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
  thisproduct: [];
 
  constructor(private storageService:StorageService, private plt:Platform, private toastController:ToastController) {   
    this.getItem();    
    this.plt.ready().then(() => {
      this.loadItems();
    });
    
   }

  ngOnInit() {
  }

  async getItem(){
    const products = await Storage.get({key:'favCars'});
    
    this.thisproduct = JSON.parse((products).value);
    //console.log(JSON.parse((products).value));
    return JSON.parse(products.value);
  }

  async removeItem(){
    await Storage.remove({key:'favCars'});
    window.location.reload();
  }

  loadItems(){
    this.storageService.getFavCar().then(favCar => {
      this.favCars = favCar;
      //console.log(this.favCars);
    });
  }

  async deleteItem(favCar:favCar){
    this.storageService.deleteFavCar(favCar.hsnTsn).then(favCar => {
     console.log(favCar);
      
      this.product = favCar;
      Storage.set({
        key:"favCars",
        value: JSON.stringify(favCar)
      });
      window.location.reload();
    });
    
    this.showToast("FavCar removed!"); 
  }

  async deleteAllItems(){
    console.log("DElete All");
    this.storageService.deleteAllFavCars().then(emptyList => {
      Storage.set({
        key:"favCars",
        value: JSON.stringify(emptyList)
      });
      window.location.reload();
    });
    this.showToast("All Cars removed from list!"); 
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }
  
  
}
