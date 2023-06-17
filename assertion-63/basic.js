var assert = require("assert");
const { log } = require("console");
// assert.equal(3+5, 8);
// try{
// assert.deepEqual({foo:1}, {foo:2});
// }catch(e){
//     console.log(e);
// }
let e;
try {
  const x = 3;
  assert.equal(x, 8, "x must be equal to 8");
} catch (err) {
   log("AssertionError [ERR_ASSERTION]: x must be equal to 8");
   assert.deepEqual([1,2,3],[1,2],"AssertionError [ERR_ASSERTION]: x must");
}
