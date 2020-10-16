import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-favproduct',
  templateUrl: './favproduct.component.html',
  styleUrls: ['./favproduct.component.scss'],
})
export class FavproductComponent implements OnInit {
  @Input('product') favproduct:any;

  constructor( private router:Router, private navExtras:DataService) { }

  ngOnInit() {
    
  }

  navigateToCarModellDescription(e:String){
    //console.log(this.product.hsnTsn);
    this.navExtras.setDataSerivce(this.favproduct);
    this.router.navigateByUrl("car");
  }


}
