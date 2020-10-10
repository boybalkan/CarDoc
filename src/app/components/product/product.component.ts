import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input('product') product:any;

  constructor( private router:Router, private navExtras:DataService) {
   
   }

  ngOnInit() {}

  

  navigateToCarModellDescription(e:String){
    console.log(this.product.hsnTsn);
    this.navExtras.setDataSerivce(this.product);
    this.router.navigateByUrl("audi");
  }

}
