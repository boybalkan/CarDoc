import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private hersteller = ['Audi', 'BMW'];
  information: any[];

  public items: Array<{ name:string}> = [];
  public allItems: Array<{ name: string}> = [];
  public selected: String = '';

  searchData:any[];


  constructor(private router : Router, private dataService:DataService ,private http:HttpClient, private httpService: HttpClient) { 
     
     }

 /*    sucheAutoHersteller(ev){
     // this.searchData.push(this.dataService.getSearchData());
      console.log("Das ist das Auto " + this.dataService.getSearchData() );  
      this.items = this.allItems;

      const searchBar = document.querySelector('ion-searchbar');
      const query = ev.target.value.toLocaleLowerCase();
      const val = ev.detail.value;
      
      requestAnimationFrame(() => {
        items.forEach(item => {
          const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
          item.style.display = shouldShow ? 'block' : 'none';
        });
      });
     
     
     // if(val && val.trim() !== ''){
     //   this.items = this.items.filter(term => {
     //     return term.name.toLocaleLowerCase().indexOf(val.trim().toLocaleLowerCase()) > -1;
     //   });
      //}
    }
  */  ngOnInit(){ 
      
    }

}
