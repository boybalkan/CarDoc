import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { favCar } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  extras: favCar = <favCar>{};;
  searchData:any[];
  

  constructor(private http: HttpClient) { 
   
  }

  public setDataSerivce(data){
    this.extras = data;
  }
  public getDataService(){
    return this.extras;
  }
  public getSearchData(){
    return this.http.get('assets/information.json').subscribe(res => {
      this.searchData = res['items'];
      //console.log("Das ist das Auto " + this.searchData + this.searchData[0].children[0].children[0].marke);    
    });
  }


}
