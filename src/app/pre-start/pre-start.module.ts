import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreStartPageRoutingModule } from './pre-start-routing.module';

import { PreStartPage } from './pre-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreStartPageRoutingModule
  ],
  declarations: [PreStartPage]
})
export class PreStartPageModule {}
