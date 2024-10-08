// How to implement class inheritance in JavaScript?

class Car{
    constructor(model, name){
        this.model = model;
        this.name = name;
    }
    start(){
        console.log(this.name);
    }
    end(){
        console.log('Car Stopped');
    }
}

class ElectricCar extends Car {
    dashboard(){
        console.log('Welcome!');
    }
    start(){
        super.start();
        super.end();
        this.dashboard();
    }
}

const elCar = new ElectricCar('AJ7', 'BMW');
elCar.start();