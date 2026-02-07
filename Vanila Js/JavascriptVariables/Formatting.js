/**
 * Number Formatting 
 */
let n1 = 56.906788;
console.log(n1);
console.log(Math.ceil(n1));
console.log(Math.floor(n1));
console.log(Math.round(n1));

let with2decimal = Math.round(n1 * 100)/100;
console.log(with2decimal);

let anotherrounding = Number(n1.toFixed(2));
console.log(anotherrounding);

//Formatting number based on country.
let n2 = 1_000_000_000;

console.log(n2.toLocaleString("en-US"));
console.log(n2.toLocaleString("en-GB"));
console.log(n2.toLocaleString("hi-IN"));
console.log(n2.toLocaleString("el-EL"));

let salary = 121000;
let monthly = salary/12;
console.log(`salary : ${monthly.toFixed(2)}`);

let format1 = new  Intl.NumberFormat("en-US",{style:"currency" , currency:"USD"});
console.log(`Salary in US :  ${format1.format(monthly)}`);
let format2 = new Intl.NumberFormat("en-GB" , {style:"currency" , currency:"GBP"} );
console.log(`Salary in UK : ${format2.format(monthly)}`);
let format3 = new Intl.NumberFormat("ja-JP", {style:"currency",currency:"JPY"});
console.log(`salary in Japan : ${format3.format(monthly)}`);

/**
 * Date Formatting 
 */

let today =  new Date();
console.log(`Today is : ${today}`);
console.log(`Today is ${today.toDateString()}`);

//localization
console.log(`Today is ${today.toLocaleDateString()}`);
console.log(`Today is ${today.toLocaleDateString("en-US")}`);
console.log(`Today is ${today.toLocaleDateString("en-GB")}`);
console.log(`Today is ${today.toLocaleDateString("ja-JP")}`);

console.log(`Time is : ${today.toLocaleTimeString("en-US")}`);
console.log(`Time is : ${today.toLocaleTimeString("en-GB")}`);
console.log(`Time is : ${today.toLocaleTimeString("ja-JP")}`);

console.log(`Current Date and Time is ${today.toLocaleString("en-US",{dateStyle:"short" , timeStyle:"short"})}`);