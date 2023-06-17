'use strict'
//Single line comments
/*
Multi-line comments
*/
// Declaring and initializing x (immutable binding):
const x = 8;
// Would cause a TypeError:
// x = 9;
//let creates mutable variable bindings:
// Declaring y (mutable binding):
let y;
// We can assign a different value to y:
y = 3 * 5;
// Declaring and initializing z:
let z = 3 * 5;
//Plain objects
// Creating a plain object via an object literal
const obj = {
first: 'Jane', // property
last: 'Doe', // property
getFullName() { // property (method)
return this.first + ' ' + this.last;
},
};
console.log(obj.getFullName());
import { moduledem } from "./moduledem.mjs";
moduledem();
//console.log(moduledem());
let myBool=true;
let myStr = myBool ? "Yes" : "No";
console.log(myStr)