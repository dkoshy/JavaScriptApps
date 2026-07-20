//array literal syntax



let nums = [];
let digits = [3];
let data = [5, 6, 7, 8];
console.log(nums, digits, data);
nums[0] = 10;
nums[1] = 11;
console.log(nums);


//new Array()

let fruits = new Array("Apple");
let fibs = new Array(3);
console.log(fruits, fibs);

//Object.Create(Array.prototype)

let lang = Object.create(Array.prototype);
lang.push("English");
lang.push("Hindi");
lang[2] = "French";  //failed to track length property
console.log(lang, Array.isArray(lang), lang.length);

//Array.of() Array.from()

let evenNumbers = Array.of(2);
evenNumbers[1] = 4;
let oddNumbers = Array.of(1, 3, 5);
console.log(evenNumbers, oddNumbers);

let alphas = Array.from("ABCDEFGHI");
let double = Array.from([8, 9, 10, 12], n => n * 2);
console.log(alphas, double);


//checking is an array

let realArray = [5];
let arrayLike = Object.create(Array.prototype);
console.log(realArray instanceof Array, Array.prototype.isPrototypeOf(realArray), Array.isArray(realArray));
console.log(arrayLike instanceof Array, Array.prototype.isPrototypeOf(arrayLike), Array.isArray(arrayLike));

//stack and Queue

let myStack = [];
myStack.push(10);
myStack.push(30);
myStack.push(50);
console.log(myStack);

let myQueue = [];
myQueue.unshift(20);
myQueue.unshift(30);
myQueue.unshift(50);
console.log(myQueue);

myStack.pop()
console.log(myStack);
myQueue.shift();
console.log(myQueue);
console.log(myQueue.las)

//length() ,indexOf(item , fromIndex) , lastIndexOf(item, fromIndex) , findIndex(callback) , findLastIndex(callback)

fruits = ['apple', 'banana', 'orange', 'banana'];

console.log(fruits.indexOf('banana'));      // 1
console.log(fruits.lastIndexOf('banana'));  // 3
console.log(fruits.findIndex(f => f.startsWith('o'))); // 2 (orange)
console.log(fruits.at(0), fruits.at(-1));

//sort() , toSort() , reverse() , toReverse()

const usersData = [
    { name: 'Chloe', age: 34, joined: '2025-06-15' },
    { name: 'Alex', age: 22, joined: '2024-11-01' },
    { name: 'Blake', age: 28, joined: '2026-02-20' }
];

usersData.sort((f, s) => f.age - s.age);
console.log(usersData);
usersData.sort((f, s) => s.age - f.age);
console.log(usersData);

let sortedData = usersData.toSorted((f, s) => {
    if (f.name < s.name) return -1;
    if (f.name > s.name) return 1;
    return 0;
})

console.log(sortedData);

let descendingData = usersData.toSorted((f, s) => {
    if (f.name > s.name) return -1;
    if (f.name < s.name) return 1;
    return 0;
})

console.log(descendingData);

let reversedData = usersData.toReversed();
console.log(reversedData);

let sortingwithtie = usersData.toSorted((f, s) => {
    return (f.age - s.age) || (f.name.localeCompare(s.name));
});

console.log(sortingwithtie);

//slice() , splice() and toSpliced()

let tobeSliced = [8, 9, 0, 6, 7, 1, 2, 3];
let slicedArray = tobeSliced.slice(2, 5);
console.log(slicedArray);
slicedArray = tobeSliced.slice(-6, -1);
console.log(slicedArray);
slicedArray = tobeSliced.slice(-6);
console.log(slicedArray);

let arraytoSplice = [10, 20, 30, 40, 50, 60];
arraytoSplice.splice(2, 4);
console.log(arraytoSplice);
arraytoSplice.splice(-1, 1);
console.log(arraytoSplice);
arraytoSplice.splice(0, 1, 10, 20, 30, 40, 50);
console.log(arraytoSplice);
arraytoSplice.unshift(0);
console.log(arraytoSplice);

//iteration

for (let f of fruits) {
    console.log(f);
}

for (let [i, v] of fruits.entries()) {
    console.log(`${i} -  ${v}`);
}

fruits.forEach((v,i)=>{
    console.log(`${i} - ${v}`);
});

let arr =[8,9,3,2,4];
arr.forEach((v,i,a)=>{
    a[i] *= v;
});
console.log(arr);

arr = [3,4,5];
arr[4] = 7;
console.log(arr);
arr.forEach((v,i,a)=>{
    a[i] *=v;
})
console.log(arr);

