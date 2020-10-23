import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { favCar, StorageService } from '../../services/storage.service';

const { Storage } = Plugins;

@Component({
  selector: 'app-favproduct',
  templateUrl: './favproduct.component.html',
  styleUrls: ['./favproduct.component.scss'],
})
export class FavproductComponent implements OnInit {
  @Input('product') favproduct:any;
  

  constructor( private toastController:ToastController, private router:Router, private navExtras:DataService, private storageService:StorageService) { }

  ngOnInit() {
    
  }

  navigateToCarModellDescription(e:String){
    //console.log(this.product.hsnTsn);
    this.navExtras.setDataSerivce(this.favproduct);
    this.router.navigateByUrl("car");
  }

  async deleteItem(favCar:favCar){
    this.storageService.deleteFavCar(favCar.hsnTsn).then(favCar => {
      this.favproduct = favCar;
      Storage.set({
        key:"favCars",
        value: JSON.stringify(favCar)
      });
      window.location.reload();
    });    
    this.showToast("FavCar removed!"); 
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }
  

}
