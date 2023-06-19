
var assert=require('assert');
const { log } = require('console');
// Binary (base 2)
assert.equal(0b11, 3); // ES6
// Octal (base 8)
assert.equal(0o10, 8); // ES6
// Decimal (base 10)
assert.equal(35, 35);
log('3e2', 3e2);
log('3e-2', 3e-2);
log('0.3e2', 0.3e2);
