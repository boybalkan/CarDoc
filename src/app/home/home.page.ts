import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

sub:any;
mostSearched :any;
  
information:any[];
automaticClose = true;
searchData:any[];
allInformation:any[] ;


constructor(private http: HttpClient, private dataService :DataService, private pos:ActivatedRoute ){
  this.http.get('assets/information.json')
    .subscribe(res => {
    this.information = res['items'];
    this.allInformation=res['items'];
    

    this.sub = this.pos.params.subscribe(params => {
    this.mostSearched = params['pos'];
    //console.log(params);
   });
   if(this.mostSearched >= 0){
    this.openAccordion(this.mostSearched);
    console.log(this.mostSearched);
   }else{
    console.log(this.mostSearched);
   }
  
   //console.log(this.items);
   
  });
 
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

openAccordion(i){
  this.information[i].open = true;
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
