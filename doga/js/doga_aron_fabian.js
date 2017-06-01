class Car{
    constructor(name, color) {
        this.name = name
        this.tank = 70;
        this.color = color
        this.fogyasztas = 5;
        this.utasok = [];

        Object.defineProperty(this, 'kerekszam',{
        value: 4,
        writable: false,
        enumerable: true,
        configurable: true
         });
    if(!this.color){
        this.color="white";
    }
}
printallinfo (){
    console.log(this.name+"rendszáma "+this.name);
    console.log("auto tankja "+this.tank);
    console.log("auto szine "+this.color);
    console.log("auto fogyasztas "+this.fogyasztas);
    console.log("auto kerekek száma"+car1.kerekszam)
    }

    myCargoing(kilometers){
        let fogyasztas = this.fogyasztas /100;
        if(this.tank<=0){
            console.log("Üres a tank")
        }
        while(kilometers >=0){
            kilometers--;
            this.tank = this.tank - fogyasztas;
        }
       let összeg = Math.round(this.tank * 100) / 100;
        console.log(this.name+"rendszámú kocsi tankja"+this.tank+"liter üzemanyag maradt");


    }
}
let car1 = new Car("ASD-123");
car1.printallinfo();
car1.myCargoing(50);









