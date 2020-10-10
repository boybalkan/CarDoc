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
        marke: this.information[i].name ,
        modell: this.information[i].children[j].name,
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
  
  console.log("All: " + this.information[1].children[1].children[1].hsnTsn);  
  //console.log(val);
  if(val && val.trim() !== ''){
    
      this.information = this.information.filter(data => {
        console.log(data.children);
        return data.name.toLocaleLowerCase().indexOf(val.trim().toLocaleLowerCase()) > -1 
               
         ;
         
      });
      for(let i=0; i < this.allInformation.length; i++){
    }
   
  }
  
}

 






/*
  private hersteller = ['Audi', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Ford', '',
     'Abarth','Alfa Romeo', 'Alpina', 'Alpine', 'Aston Martin','Bentley', 'Brabus', 
     'Bugatti', 'Cadillac', 'Chevrolet', 'Chrysler', 'Citroen', 'Corvette', 'Dacia', 
     'Daihatsu', 'Dodge' ];

  private modelleAudi = ['Audi A1', 'Audi A2', 'Audi A3', 'A4', 'A5', 'A6', 'A7', 'A8'];

  public items: Array<{ title:string; icon:string}> = [];
  public allItems: Array<{ title: string; icon: string }> = [];

  public selected: String = '';


  constructor(private router: Router) {
    for(let i = 0; i < this.hersteller.length; i++){
      this.items.push({
        title: this.hersteller[i].charAt(0).toUpperCase() + this.hersteller[i].slice(1),
        icon: this.hersteller[i]
      });
    }
    this.allItems = this.items;
  }

  ngOnInit(){
    }

  sucheAutoHersteller(ev: CustomEvent){
    this.items = this.allItems;
    const val = ev.detail.value;

    if(val && val.trim() !== ''){
      this.items = this.items.filter(term => {
        return term.title.toLocaleLowerCase().indexOf(val.trim().toLocaleLowerCase()) > -1;
      });
    }
  }

 

  zeigeAudiModellAn(event: any){
    
    const value = event.target.value;
    this.selected = value;
    console.log(event);
    console.log(this.selected);

    if(value == "a1"){
      console.log("Das ist ein Audi A1");
    }
  }
 
 
  
  */
}
