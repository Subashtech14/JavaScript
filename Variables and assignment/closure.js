// function funcFactory(value){
//     return()=>{
//         return value;
//     }
// }
// const func=funcFactory("Hello");
// console.log(func());
//Incrementar
var assert=require('assert');
const { log } = require('console');
function createInc(startValue) {
  return (step) => {
    // (A)
    startValue += step;
    return startValue;
  };
}
const inc = createInc(5);
assert.equal(inc(2), 7);
log(inc(2));