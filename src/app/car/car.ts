

export class car{
    marke:String;
    modell:String;
    baujahr:String;
    motor:String;
    hsnTsn:String;
    krankheiten:String;
    picFront:String;
    picBack:String;
    picInside:String;


    constructor(car?:any){
        if(car){
            this.marke = car.marke;
            this.modell = car.modell;
            this.baujahr = car.baujahr;
            this.motor= car.motor;
            this.hsnTsn = car.hsnTsn;
            this.krankheiten = car.krankheiten;
            this.picFront = car.picFront;
            this.picBack = car.picBack;
            this.picInside = car.picInside;

        }
    }
}