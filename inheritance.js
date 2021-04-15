class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}
let dog = new Dog('Rex');
dog.speak(); // Rex barks.


//super class constructor and method called
class Vehicle{
    constructor(brand,type){
        this.brand = brand;
        this.type = type;
    }

    check_vehicle(){
        console.log('Type '+this.type);
    }
}


class Car extends Vehicle{
    check_vehicle(){
        super.check_vehicle();
        console.log(this.brand+' is a '+this.type);
    }
}

let ford = new Car('Ford','CAR');
ford.check_vehicle();



class Product{
    constructor(brand,type){
        this.brand = brand;
        this.type = type;
    }

    check_product(){
        console.log('Type '+this.type);
    }
}


class Software extends Product{
    constructor(brand,type){
        super(brand,type);
    }
    check_product(){
        super.check_product();
        console.log(this.brand+' is a '+this.type);
    }
}

let chrome = new Software('GOOGLE','Product');
chrome.check_product();