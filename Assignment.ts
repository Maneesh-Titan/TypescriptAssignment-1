Exercise 1:

const numberarray: number[] = [1, 2, 3, 4, 5];
const stringarray: string[] = ["apple", "banana", "cherry", "date"];
const booleanarray: boolean[] = [true, false, true, true, false];
const mixedarray: (number | string)[] = [1, "two", 3, "four", 5, "six"];
console.log(numberarray);
console.log(stringarray);
console.log(booleanarray);
console.log(mixedarray);

Exercise 2:

let fruits: string[] = ["apple", "banana", "mango"];
fruits.push("grapes");
console.log("After adding grapes:", fruits);
fruits.shift();
console.log("After removing first element:", fruits);
fruits.splice(2, 0, "pineapple");
console.log("After inserting pineapple:", fruits);
fruits.reverse();
console.log("After reversing:", fruits);

Exercise 3:

let numbers: number[] = [10, 20, 30, 40, 50, 60];
let doubled: number[] = numbers.map(num => num * 2);
let filtered: number[] = numbers.filter(num => num <= 50);
let sum: number = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Doubled numbers:", doubled);
console.log("Filtered numbers:", filtered);
console.log("Sum:", sum);

Exercise 4:

let values: number[] = [10, 20, 30, 40, 50];
let result: number | undefined = values.find(num => num > 25);
let index: number = values.findIndex(num => num === 40);
console.log("First number > 25:", result);
console.log("Index of 40:", index);

Exercise 5:

let scores: number[] = [55, 23, 87, 12, 99, 38];
let ascending: number[] = [...scores].sort((a, b) => a - b);
let descending: number[] = [...scores].sort((a, b) => b - a);
console.log("Ascending order:", ascending);
console.log("Descending order:", descending);

Exercise 6:

let student: [string, number, boolean] = ["John", 21, true];
student[1] = 22;
console.log(student);

Exercise 7:

let roles: string[] = ["User", "Editor", "Admin", "Moderator"];
let hasAdmin: boolean = roles.includes("Admin");
let hasSuper: boolean = roles.some(role => role.startsWith("Super"));
console.log("Contains Admin:", hasAdmin);
console.log("Has Super role:", hasSuper);

Exercise 8:

let nestedArray: (number | number[])[] = [1, [2, 3], [4, [5, 6]]];
let flattenedArray: number[] = nestedArray.flat(Infinity);
console.log(flattenedArray);

Exercise 9:

let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5, 6];
let uniqueArray: number[] = [...new Set([...arr1, ...arr2])];
console.log(uniqueArray);

Exercise 10:

interface Employee {
    name: string;
    age: number;
    position: string;
}
let employees: Employee[] = [
    { name: "Ramu", age: 28, position: "Developer" },
    { name: "siva", age: 35, position: "Manager" },
    { name: "sai", age: 42, position: "Operations" },
    { name: "Mahesh", age: 31, position: "Tester" }
];
let filteredEmployees: Employee[] = employees.filter(emp => emp.age > 30);
console.log(filteredEmployees);





