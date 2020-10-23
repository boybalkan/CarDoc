import { Component, Input, OnInit } from '@angular/core';
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
  isFav:boolean;
  favCars: favCar[] = [];
  newFavCar: favCar = <favCar>{};
  car : favCar = <favCar>{};

  favList: favCar[] = [];

  hideCatMotor:boolean=false;
  hideCatFahrwerk:boolean=false;
  hideCatElektrik:boolean=false;


  constructor(private navExtras:DataService, private router:Router, private storage:StorageService, private storageService:StorageService, private plt:Platform, private toastController:ToastController) {
    this.car  = navExtras.getDataService();
    this.getItem();     

    this.plt.ready().then(() => {
      this.loadItems(); 
      this.clickStar();   
    });
   
   }
  
  ngOnInit() {
  }


  clickStar(){   
    console.log(this.favList);
    try{
      if(this.favList.length !== 0){    
        for(let i=0;i<this.favList.length;i++){
          if(this.car.hsnTsn !== this.favList[i].hsnTsn){
            this.isFav=false;
            console.log(this.isFav);
          }else{      
            this.isFav=true;
            console.log(this.isFav);
            return;
          }         
        }      
      } 
    }catch(err){
      console.log("Storage is not initialize");
      this.favList = [];
      this.clickStar();
    }  
  //console.log(this.isFav); 
}

  async setItem(){
    if(this.isFav === true){
     return;
    }
    this.addItem();    
    this.favList = this.favCars;
    //console.log(this.favCars);
    await Storage.set({
      key:"favCars",
      value: JSON.stringify(this.favCars)
    });
    this.isFav = true;
    this.loadItems();
   
    this.showToast("Added to favorites");        
}

async unsetItem(){
  //console.log("Removed from favs");
  this.isFav = false;
  this.deleteItem(this.car);
  this.showToast("Removed from favorites"); 
}

async getItem(){
  const products = await Storage.get({key:'favCars'});
  this.favList = JSON.parse(products.value);
  //console.log(this.favList);
  return JSON.parse(products.value);
}

async removeItem(){
  await Storage.remove({key:'favCars'});
}

async  addItem(){
    this.newFavCar.hsnTsn = this.car.hsnTsn;
    this.newFavCar.marke = this.car.marke;
    this.newFavCar.baujahr = this.car.baujahr;
    this.newFavCar.modell = this.car.modell;
    this.newFavCar.motor = this.car.motor;
    this.newFavCar.krankheiten = this.car.krankheiten;
    this.newFavCar.pic_url_front =  this.car.pic_url_front;
    this.newFavCar.pic_url_back = this.car.pic_url_back;
    this.newFavCar.pic_url_inside = this.car.pic_url_inside;

    this.storageService.addFavCar(this.newFavCar).then(favCar => {
      this.newFavCar = <favCar>{};
      Storage.set({
        key:"favCars",
        value: JSON.stringify(favCar)
      });      
    });
    //console.log(this.newFavCar);    
  }
  
  deleteItem(favCar:favCar){
    this.storageService.deleteFavCar(favCar.hsnTsn).then(favCar => {
      console.log(favCar);
      
      Storage.set({
        key:"favCars",
        value: JSON.stringify(favCar)
      });     
    });
    this.showToast("FavCar removed!");
  }

  async loadItems(){
    this.storageService.getFavCar().then(favCar => {
      this.favCars = favCar;
    });    
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }

  hide(num:number){
    if(num === 1){
      if(this.hideCatMotor){
        this.hideCatMotor=false;
      }else{
        this.hideCatMotor=true;
      }
    }else if(num === 2){
      if(this.hideCatFahrwerk){
        this.hideCatFahrwerk=false;
      }else{
        this.hideCatFahrwerk=true;
      }
    }else if(num === 3){
      if(this.hideCatElektrik){
        this.hideCatElektrik=false;
      }else{
        this.hideCatElektrik=true;
      }
    }
     
  }

  

 

}
