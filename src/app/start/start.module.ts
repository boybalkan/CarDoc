import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartPageRoutingModule } from './start-routing.module';

import { StartPage } from './start.page';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { SharedComponentsModule } from '../components/shared-components.module';
import { HomePage } from '../home/home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [StartPage, HomePage]
})
export class StartPageModule {}
