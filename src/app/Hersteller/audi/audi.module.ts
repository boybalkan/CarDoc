import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiPageRoutingModule } from './audi-routing.module';

import { AudiPage } from './audi.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiPageRoutingModule
  ],
  declarations: [AudiPage, FooterComponent]
})
export class AudiPageModule {}
