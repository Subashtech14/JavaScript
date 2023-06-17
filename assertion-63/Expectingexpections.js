//function throws(block: Function, message?: string): void
var assert = require("assert");
assert.throws(() => {
  null.prop;
});
//function throws(block: Function, error: Function, message?: string):void
assert.throws(() => {
  null.prop;
}, TypeError);
//function throws(block: Function, error: RegExp, message?: string): void
assert.throws(() => {
  null.prop;
  assert.fail();
}, /^TypeError: Cannot read properties of null \(reading 'prop'\)$/);
//function throws(block: Function, error: Object, message?: string): void
assert.throws(
  () => {
    null.prop;
  },
  {
    name: "TypeError",
    message: "Cannot read properties of null (reading 'prop')",
  }
);
