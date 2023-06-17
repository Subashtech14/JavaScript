/*A function declaration is always executed when entering its scope, regardless of where it
is located within that scope. That enables you to call a function foo() before it is declared:*/
var assert = require("assert");
assert.equal(foo(), 123); // OK
function foo() {
  return 123;
}
/*if a function via const or let, then it is not activated early. In the following
example, you can only use bar() after its declaration*/
assert.equal(bar(), 123);
const bar =()=>{
    return 123;
}
