

export class car{
    marke:String;
    modell:String;
    baujahr:String;
    motor:String;
    hsnTsn:String;
    krankheiten:String;


    constructor(car?:any){
        if(car){
            this.marke = car.marke;
            this.modell = car.modell;
            this.baujahr = car.baujahr;
            this.motor= car.motor;
            this.hsnTsn = car.hsnTsn;
            this.krankheiten = car.krankheiten;
        }
    }
}