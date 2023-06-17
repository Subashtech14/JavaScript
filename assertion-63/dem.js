const assert = require("assert");

function divide(a, b) {
  if (b === 0) {
    throw new Error("Divide by zero");
  }
  return a / b;
}

// Test case using assert.throws
assert.throws(
  () => {
    divide(0, 0);
  },
  Error,
  "Expected an error to be thrown"
);

console.log("Test passed successfully");
