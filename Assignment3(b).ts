Strongly Typed Variables & Functions

type Product = {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
};
function getDiscountedPrice(product: Product, discount: number): number {
    return product.price - (product.price * discount) / 100;
}
Union & Intersection Types
function formatInput(input: string | number | string[]): string {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        return `$${input}`;
    } else {
        return input.join(", ");
    }
}
Tuples & Enums
enum DriverStatus {
    Available,
    OnTrip,
    Offline
}
type DriverInfo = [number, string, DriverStatus];
const driver: DriverInfo = [1, "John Doe", DriverStatus.Available];

Interfaces & Generics

interface User {
    id: number;
    name: string;
    role: "Admin" | "Customer";
}
function getUserDetails<T extends User>(user: T): string {
    return `User ${user.name} is a ${user.role}`;
}
Class Implementation & Abstract Classes
abstract class BankAccount {
    constructor(public accountNumber: number, public balance: number) {}
    abstract withdraw(amount: number): void;
}
class SavingsAccount extends BankAccount {
    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }
}
class CurrentAccount extends BankAccount {
    private overdraftLimit: number = 500;
    withdraw(amount: number): void {
        if (this.balance + this.overdraftLimit >= amount) {
            this.balance -= amount;
        } else {
            console.log("Overdraft limit exceeded");
        }
    }
}
const savings = new SavingsAccount(12345, 1000);
savings.withdraw(200);
const current = new CurrentAccount(67890, 1000);
current.withdraw(1200);

Utility Types & Mapped Types

interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}
type ReadonlyEmployee = Readonly<Employee>;
type PartialEmployee = Partial<Employee>;
function updateEmployeeInfo(emp: PartialEmployee): void {
}

Type Guards & Type Narrowing

type TextMessage = {
    type: "text";
    content: string;
};
type ImageMessage = {
    type: "image";
    imageUrl: string;
};
type Message = TextMessage | ImageMessage;
function isTextMessage(msg: Message): msg is TextMessage {
    return msg.type === "text";
}
function handleMessage(msg: Message): void {
    if (isTextMessage(msg)) {
        console.log(`Text: ${msg.content}`);
    } else {
        console.log(`Image: ${msg.imageUrl}`);
    }
}

Decorators & Metadata

function LogClass(constructor: Function) {
    console.log(`Class ${constructor.name} is instantiated`);
}
@LogClass
class OrderService {
}
const orderService = new OrderService();

Asynchronous TypeScript & Promises

async function getWeather(city: string): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const temperature = Math.random() * 100;
            resolve(temperature);
        }, 2000);
    });
}
async function fetchWeather() {
    try {
        const nyWeather = await getWeather("New York");
        console.log(`New York: ${nyWeather}`);
        const londonWeather = await getWeather("London");
        console.log(`London: ${londonWeather}`);
    } catch (error) {
        console.error("Error fetching weather data", error);
    }
}
fetchWeather();
TypeScript with MongoDB (for Full-Stack Developers)
interface Product {
    _id: string;
    name: string;
    price: number;
    stock: number;
    category: string;
}
async function findProductById(id: string): Promise<Product | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product: Product | null = {
                _id: id,
                name: "Sample Product",
                price: 100,
                stock: 50,
                category: "Sample Category"
            };
            resolve(product);
        }, 1000);
    });
}
async function getProduct() {
    const product = await findProductById("12345");
    if (product) {
        console.log(product);
    } else {
        console.log("Product not found");
    }
}
getProduct();