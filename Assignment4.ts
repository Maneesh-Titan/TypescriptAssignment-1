Exercise 1: Basic Abstract Class

abstract class Shape {
    constructor(private color: string) {}
    abstract calculateArea(): number;
    getColor(): string {
        return this.color;
    }
}
class Circle extends Shape {
    constructor(color: string, private radius: number) {
        super(color);
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(color: string, private width: number, private height: number) {
        super(color);
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}
const circle = new Circle("red", 5);
console.log(`Circle color: ${circle.getColor()}, Area: ${circle.calculateArea()}`);
const rectangle = new Rectangle("blue", 4, 6);
console.log(`Rectangle color: ${rectangle.getColor()}, Area: ${rectangle.calculateArea()}`);


Exercise 2: Implementing an Interface

interface Vehicle {
    speed: number;
    move(): void;
}
class Car implements Vehicle {
    constructor(public speed: number) {}
    move(): void {
        console.log(`Car is moving at speed ${this.speed}`);
    }
}
class Bicycle implements Vehicle {
    constructor(public speed: number) {}
    move(): void {
        console.log(`Bicycle is moving at speed ${this.speed}`);
    }
}
const car = new Car(80);
car.move();
const bicycle = new Bicycle(20);
bicycle.move();


Exercise 3: Combining Abstract Class and Interface
interface Flyable {
    fly(): void;
}
abstract class Bird {
    constructor(public name: string) {}
    eat(): void {
        console.log(`${this.name} is eating`);
    }
}
class Eagle extends Bird implements Flyable {
    fly(): void {
        console.log(`${this.name} is flying`);
    }
}
class Sparrow extends Bird implements Flyable {
    fly(): void {
        console.log(`${this.name} is flying`);
    }
}
const eagle = new Eagle("Eagle");
eagle.eat();
eagle.fly();
const sparrow = new Sparrow("Sparrow");
sparrow.eat();
sparrow.fly();


Exercise 4: Interface Inheritance
interface Person {
    name: string;
    speak(): void;
}
interface Employee extends Person {
    salary: number;
    work(): void;
}
class Developer implements Employee {
    constructor(public name: string, public salary: number) {}
    speak(): void {
        console.log(`${this.name} is speaking`);
    }
    work(): void {
        console.log(`${this.name} is working`);
    }
}
const developer = new Developer("Alice", 50000);
developer.speak();
developer.work();