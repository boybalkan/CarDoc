import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FavproductComponent } from './favproduct/favproduct.component';



@NgModule({
  declarations: [ProductComponent, FavproductComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProductComponent,
    FavproductComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedComponentsModule { }
