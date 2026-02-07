//Dynamic typing in javascript
let firstName = "Deepak";
let lastName = "Koshy";
let numberOfYearsWorked = 15;
let dateOfBirth = new Date("May 17, 1984");

console.log(dateOfBirth);

//const
const selfEvaluationRating = 3.4;

console.log(selfEvaluationRating);
console.log(firstName.toUpperCase());

/**
 * *** Data TYpes
 * stack & Heap for storing data
 * *** Primitive Types (immutable )
 *     - Boolean , Number , Bigint , string
 *     - symbol , null and undefined
 * **** Objects (mutable)
 *  - Plain Objects , Functions , Collections ,
 *  - Dates , class instance , Errors , Promises
 *
 * all these primitives types have some wrapper utility methods
 * used for some operations eg: upperCase(),
 */

let fullName = `${firstName} ${lastName}`; //string interpllation
console.log(fullName);
console.log(`The number of chars is : ${fullName.length} `);
console.log(fullName.indexOf("Koshy"));
console.log(fullName.indexOf("Bini"));
console.log(fullName.includes("Deepak"));
console.log(fullName.toLowerCase().includes("deepak"));

let multiLine = `deepak is working in Harman, 
but bini is working in Infy`; // multi-line  string

/**
 * Boolean values
 */

let itIsTrue = true;
let itisNotTrue = !true;
let itIsNotFalse = !false;
let itisFalse = false;

console.log(itIsNotFalse);
console.log(itIsTrue);
console.log(itisNotTrue);
console.log(itisFalse);

/**
 * Number - double precision 64-bit binary format.
 *
 */
let age = 30;
let tax = 8000.9;
let maxValue = Number.MAX_SAFE_INTEGER;
let minValue = Number.MIN_SAFE_INTEGER;

let largenumber = 1n; //Big int
largenumber = 1_566_778_900_000_000_000_000_0n;

let normalnum = 15667789000000000000000;
let bigNumber = BigInt(largenumber);
console.log(largenumber);
console.log(normalnum);
console.log(bigNumber);

/**
 * Undefined and Null both represents without value.
 * You defined a variable but not assigned a value , value is undefined.
 * You want something not have a value.
 */

let undefinedValue;
console.log(undefinedValue);
console.log(typeof undefinedValue);
undefinedValue = "some value";
console.log(undefinedValue);

let manger = null;
console.log(manger);
console.log(typeof manger);

/**
 * Objects
 *
 */

let customer = {
  firstName: "Kumar",
  lastName: "Arun",
};

customer.alias = "Arun K";
customer.age = 41;
customer.pin = "78900";

console.log(customer);
console.log(customer.address);

let employee = new Object();

employee.name = "Bini Koshy";
employee.age = 35;
employee.experience = 10;

console.log(employee);

/**
 * Date 
 */

let today = new Date();
let minDate = new Date(0);
console.log(today);
console.log(minDate);
let myDateOfBirth = new Date("May 17, 1984");
console.log(myDateOfBirth);
myDateOfBirth = new Date(1984, 4, 17,0,0,0);
console.log(myDateOfBirth.toString());
console.log(myDateOfBirth.toUTCString());
console.log(myDateOfBirth.toLocaleDateString());
console.log(myDateOfBirth.toLocaleString());

/**
 * class
 */

class CalenderDate {
  //private member
  #year;
  #month;
  #date;

  constructor(year, month,date) {
    this.year = year;
    this.date = date;
    this.month =  month;
  }

  toString(){
    return `${this.year}-${this.month}-${this.date}`;
  }

}

let customdate = new CalenderDate(2025,10,27);
console.log(`custom date is : ${customdate.toString()}`);