//object Literals
const obj1 = {
  first: "Jane",
  last: "Doe",
};
//Array Literals
const fruits=["Apple","Banana","Orange"];
//Objects are passed by Identity
var assert=require("assert");
const a={};//Fresh empty Object
const b=a;
assert.equal(a === b,true)
// Changing `a` also changes `b`:
a.name = 'Tessa';
assert.equal(b.name, 'Tessa');
//Objects are compared by identity
const obj = {}; // fresh empty object
assert.equal(obj === obj, true); // same identity
assert.equal({} === {}, false); // different identities, same content
const prim = true;
assert.equal(typeof prim, "boolean");
assert.equal(prim instanceof Boolean, false);
//prim is changed to Object
const wrapped = Object(prim);
assert.equal(typeof wrapped, 'object');
assert.equal(wrapped instanceof Boolean, true);
assert.equal(wrapped.valueOf(), prim); // unwrap

