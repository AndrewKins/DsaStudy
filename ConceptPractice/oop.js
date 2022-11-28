//Javascript ES6 Classes and Factory Functions
//Class - templates for creating objects. Encapsulate data with code to work on that code
//Constructor() //initalizes an object created with a class.
//instance // object created by a class or constructor function

class Car {
    constructor(name,color,brand, type = []){
        this.name = name;
        this.color = color;
        this.brand = brand;
        this.type = type;

    }
    addToArr(brand){
        this.type.push(brand)
        return this.type
        }
    }

const mine = new Car('Andrew','Red','Honda')

console.log(mine.addToArr(mine.brand))
console.log(mine.type)
