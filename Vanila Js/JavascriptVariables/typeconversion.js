let num1 = 40;
let num2 = 50;
let result = num1 +  num2;

console.log(typeof(num1))
console.log(`${num1} + ${num2} =  ${result}`);

//converting number to string
let age = 41;
let firstName = "Deepak";
console.log(`${firstName} is ${age} old`);

//converting string to number.
let agestring = "41";
let agenumber = Number(agestring);
console.log(typeof(agenumber));


//nan
let nonnumber= "not a number";
console.log(typeof(Number(nonnumber)));
console.log(Number(nonnumber));
console.log(isNaN(nonnumber));

//converting to boolean
let n1 = 1;
let n2 = 0;
let n3 = -1;
let n4 = 10;
let s1 = "true";
let s2 = "false";
console.log(`n1 : ${Boolean(n1)} ,  n2 :  ${Boolean(n2)}
n3 : ${Boolean(n3)} ,  n4 : ${Boolean(n4)}`);
console.log(`s1 : ${Boolean(s1)} ,  s22 :  ${Boolean(s2)}`);
