//Bigints are the integers whose storage space grows and shrinks as needed
//In BigInts are suffized with a "n" to indicate the number of digits in the number
console.log(124n)
console.log(typeof(124n))
//Bigints enables the user to go beyond the safe Integers
console.log(2n**53n)
//Like number ilterals bigint also support number ilterals
const price=124_00_23n;
console.log(price)
//we can't mix BigInt with Other Datatypes
//console.log(2n+1)
console.log(7n*2n)
//we can mix both bigints and strings as well
console.log(6n+"Apples")
//we can use unary minus  operator
console.log(-(-64n));
//We can't use unary + operator
//Ordering Operators
console.log(1n<2n)
//Bitwise Operators
console.log(2**31>>0);
//BitWise Not
console.log(~0b10n);
//Binary Bitwise Operators(&,|,^)
console.log((0b1010n|0b0101n).toString(2));
//Bitwise signed shift Operators
console.log(2n<<1n);
//There is no unsigned right shift operator
//console.log(2n>>>1n);
//loose equality
console.log(0n == false);
console.log(0n != false);
//strict equality and strict inequality
console.log(123n ===123);
//Type Error is thrown if x is either undefined or null
/*
console.log(BigInt(undefined));
console.log(BigInt(null));*/
console.log(BigInt(123));
//Converting Objects
console.log(BigInt({valueOf(){ return 123}}));
console.log(BigInt.asIntN(8,BigInt(300)));
//BigInts and JSON cnat serialize BigInt
//console.log(JSON.stringify(123n));