

export class car{
    marke:String;
    modell:String;
    baujahr:String;
    motor:String;
    hsnTsn:String;
    krankheiten:String;
    pic_url_front:String;
    pic_url_back:String;
    pic_url_inside:String;


    constructor(car?:any){
        if(car){
            this.marke = car.marke;
            this.modell = car.modell;
            this.baujahr = car.baujahr;
            this.motor= car.motor;
            this.hsnTsn = car.hsnTsn;
            this.krankheiten = car.krankheiten;
            this.pic_url_front = car.pic_url_front ;
            this.pic_url_back = car.pic_url_back;
            this.pic_url_inside = car.pic_url_inside;

        }
    }
}