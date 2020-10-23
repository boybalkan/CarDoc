import { Component, OnInit } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-headerinfo',
  templateUrl: './headerinfo.component.html',
  styleUrls: ['./headerinfo.component.scss'],
})
export class HeaderinfoComponent implements OnInit {
  slideOption = {
    initialSlide:1,
    loop:true,
    speed:300,
  };

  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();

  }

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {}

  async infoAlert(){
    let alert =  this.alertCtrl.create({
      header: 'Impressum',
      message: 'The idea to this App was created by Guan Bacho. Developing was done by Alen Arnautovic.',
      buttons: ['Ok']
    });

     (await alert).present();
  }
}
