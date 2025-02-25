Exercise 1:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = arr1.concat(arr2);
console.log(combinedArray);
Output: [1, 2, 3, 4, 5, 6]
Exercise 2:

let names1 = ["Alice", "Bob"];
let names2 = ["Charlie", "David"];
let names3 = ["Eve", "Frank"];
let allNames = names1.concat(names2, names3);
console.log(allNames);
Output: ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]
Exercise 3:

[true, false, "Yes", "No", 1, 2, 3]

Exercise 4:

let numbers: number[] = [10, 20, 30, 40, 50];
numbers.copyWithin(0, 3, 5);
console.log(numbers);
Output: [40, 50, 30, 40, 50]
Exercise 5:

["apple", "date", "elderberry", "date", "elderberry"]

Exercise 6:

let arr: number[] = [1, 2, 3, 4, 5, 6];
arr.copyWithin(0, 2);
console.log(arr);
Output: [3, 4, 5, 6, 5, 6]
Exercise 7:

let numbers: number[] = [2, 4, 6, 8, 10];
let allEven: boolean = numbers.every(number => number % 2 === 0);
console.log(allEven);
Output: true
Exercise 8:

false

Exercise 9:

function allPositive(numbers: number[]): boolean {
  return numbers.every(number => number > 0);
}

let numbers1: number[] = [1, 2, 3, 4, 5];
let result1: boolean = allPositive(numbers1);
console.log(result1);
let numbers2: number[] = [-1, 2, 3, 4, 5];
let result2: boolean = allPositive(numbers2);
console.log(result2);
let numbers3: number[] = [0, 2, 3, 4, 5]; 
let result3: boolean = allPositive(numbers3);
console.log(result3); 
let emptyArray: number[] = []; 
let result4: boolean = allPositive(emptyArray);
console.log(result4); 
Output:true
false
false
true
Exercise 10:

let arr: number[] = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(arr);
Output: [0, 0, 0, 0, 0]
Exercise 11:

["A", "X", "X", "X", "E"]

Exercise 12:

let statu: string[] = ["pending", "pending", "pending", "pending", "pending"];
statu.fill("done", 2);
console.log(statu);
Output: ["pending", "pending", "done", "done", "done"]