var assert=require('assert');
const error=new Error('Hello!');
assert.equal(String(error), 'Error: Hello!');
assert.equal(error.message, 'Hello!');
const err = new Error("msg", { cause: "the cause" });
assert.equal(err.cause, "the cause");