1️ Variables & Types

let userName: string = "John Doe";
let age: number = 25;
let isStudent: boolean = true;
2️ Functions & Type Annotations

function add(a: number, b: number): number {
   return a + b;
}
3️ Function with Optional Parameters

function greet(name: string, message: string = "Hello"): string {
    return `${message}, ${name}!`;
}
4️ Union Types

function displayId(id: number | string): void {
    console.log(`ID: ${id}`);
}
5️ Arrays & Tuples

let numbers: number[] = [10, 20, 30];
let person: [string, number] = ["Alice", 30];
6️ Interfaces

interface Person {
    name: string;
    age: number;
    email: string;
}

let user: Person = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com"
};
7️ Type Aliases

type Employee = {
    id: number;
    name: string;
    role: "admin" | "manager" | "employee";
};

let employee: Employee = {
    id: 1,
    name: "Jane Smith",
    role: "manager"
};
8️ Enum

enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

let favoriteColor: Color = Color.Green;
9️ Readonly & Partial

interface User {
    id: number;
    name: string;
    email: string;
}

const user: Readonly<User> = { id: 1, name: "Alice", email: "alice@example.com" };

let newUser: Partial<User> = { name: "Bob" };
10 Classes in TypeScript

class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getCarInfo(): string {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

let myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo());