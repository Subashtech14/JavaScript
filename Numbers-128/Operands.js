const assert = require("assert");

const obj = { a: 1 };
++obj.a;
assert.equal(obj.a, 2);
console.log(Number('$$$'));
console.log(5/0);
//mantissa
console.log(-123 *(10**0))
console.log(Number.isInteger(1.0));
//Converting to Integer
//returns the largest Integer value that is less than or equal to the number
console.log(Math.floor(2.1));
//returns the smallest Integer value that is greater than or equal to the number
console.log(Math.ceil(2.5));
//returns the nearest Integer value to the number
console.log(Math.round(2.5));
// removes the decimal part
console.log(Math.trunc(2.5));
//Max safe integer
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(5));
//unsafe integers
console.log(90071992254740990+3);
console.log(Number.isFinite(5));
console.log(Number.isNaN(NaN))
console.log(Number.parseFloat('123.4'))
console.log(Number.parseInt('123.4'))
console.log('123'.toString())
//We can't directly call the toExponential method on a number literal is not allowed in javascript
console.log((12345).toExponential())