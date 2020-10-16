import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface favCar{
    marke:String;
    modell:String;
    baujahr:String;
    motor:String;
    hsnTsn:String;
    krankheiten:String;
}

const FAVCARSKEY = 'my-fav-cars';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
   

   constructor(private storage:Storage) { }

    
    addFavCar(item: favCar): Promise<any>{
        return this.storage.get(FAVCARSKEY).then((items : favCar[])=>{
            if(items){
                items.push(item);
                //console.log(item);
                return this.storage.set(FAVCARSKEY, items);
                
            }else{
                return this.storage.set(FAVCARSKEY, [item]);
            }
           
        });
       
        
    }

    getFavCar(): Promise<favCar[]>{
        return this.storage.get(FAVCARSKEY);
    }

    deleteFavCar(hsnTsn:String): Promise<favCar>{
        return this.storage.get(FAVCARSKEY).then((items:favCar[]) => {
            if(!items || items.length === 0){
                return null;
            }
            let toKeep: favCar[] = [];

            for ( let i of items){
                if(i.hsnTsn !== hsnTsn){
                    toKeep.push(i);
                }
            }
            return this.storage.set(FAVCARSKEY, toKeep);
        });
        
    }

    deleteAllFavCars(): Promise<favCar>{
        return this.storage.get(FAVCARSKEY).then((items:favCar[]) => {
            let empty:favCar[] = [];
            return this.storage.set(FAVCARSKEY, empty);
        });
    }
  

 
}