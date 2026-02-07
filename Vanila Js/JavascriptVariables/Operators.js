/**
 * Operators
 */
let x = 20;
let s = "Some string";
let n = 25;

n += x;
n++;
++x;
console.log(n);
console.log(x);
y = 3 ** 3;
console.log(y);

/**
 * Equality
 */

let v1 = 3 === 3;
let v2 = "3" === 3;
let v3 = "3" == 3;
console.log(`v1 : ${v1} , v2 : ${v2}, v3 : ${v3}`);

let v4 = undefined === null;
let v5 = undefined == null;
console.log(`v4 ${v4} , v5 ${v5}`);

/**
 * Falsy
 */

function isTruthy(name, value) {
  console.log(`${name} is ${Boolean(value)}`);
}

isTruthy("v1", undefined);
isTruthy("v2", null);
isTruthy("v3", 0);
isTruthy("v4", "");
isTruthy("v5", -0);
isTruthy("v6", NaN);

