import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSlides } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  slideOption = {
    initialSlide:1,
    loop:true,
    speed:300,
  };

  
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();

  }

  constructor() { 
     
     }

    ngOnInit(){ 
      
    }

    

}
