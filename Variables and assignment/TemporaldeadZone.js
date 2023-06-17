//The following code illustrates the temporal dead zone:
var assert = require("assert");
if (true) {
  // entering scope of `tmp`, TDZ starts
  // `tmp` is uninitialized:
  assert.throws(() => (tmp = "abc"), ReferenceError);
  assert.throws(() => console.log(tmp), ReferenceError);
  let tmp; // TDZ ends
  assert.equal(tmp, undefined);
}
//The following code illustrates the temporal dead zone:
if (true) {
  // entering scope of `tmp`, TDZ starts
  // `tmp` is uninitialized:
  assert.throws(() => (tmp = "abc"), ReferenceError);
  assert.throws(() => console.log(tmp), ReferenceError);
  let tmp; // TDZ ends
  assert.equal(tmp, undefined);
}
