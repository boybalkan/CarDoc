import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [ProductComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProductComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedComponentsModule { }
