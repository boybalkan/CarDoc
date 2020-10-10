import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

information:any[];
automaticClose = true;
searchData:any[];
allInformation:any[] ;


public items: Array<{ marke:string; modell:String, hsnTsn:String }> = [];
public allItems: Array<{ marke:string; modell:String, hsnTsn:String  }> = [];

constructor(private http: HttpClient, private dataService :DataService){
  this.http.get('assets/information.json')
    .subscribe(res => {
    this.information = res['items'];
    this.allInformation=res['items'];
    

    this.information[0].open = true;
    
    

    for(let i = 0; i < this.information.length; i++){
      for(let j = 0; j < this.information[i].children.length; j++){
        for(let k = 0; k < this.information[i].children[j].children.length; k++){
        this.items.push({
        marke: this.information[i].brand ,
        modell: this.information[i].children[j].modell,
        hsnTsn: this.information[i].children[j].children[k].hsnTsn 
      });
    }  
    }
   }
   console.log(this.items);
   
  });
 
 
  this.allItems = this.items;
  this.allInformation = this.information;
}
 ngOnInit(){
    }

toggleSection(index){
  this.information[index].open = !this.information[index].open;

  if(this.information[index].open){
    this.information
    .filter((item,itemIndex) => itemIndex != index)
    .map(item => item.open = false);
  }
}

toggleItem(index, childIndex){
  this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;

  if(this.information[index].children[childIndex].open){
    this.information[index].children
   
    .filter((item,cIndex) => cIndex != childIndex)
    .map(item => item.open = false);
  }
}

sucheAutoHersteller(ev: CustomEvent){
  this.information = this.allInformation;
  const val = ev.detail.value;
  
  //console.log("All: " + this.information[1].children[1].children[1].hsnTsn);  
  //console.log(val);
  if(val && val.trim() !== ''){
    
      this.information = this.information.filter(data => {
       // console.log(data.children);
        return data.brand.toLocaleLowerCase().indexOf(val.trim().toLocaleLowerCase()) > -1;  
      });
   
  }
  
}


}
