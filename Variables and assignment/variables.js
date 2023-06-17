var assert=require('assert');
let j;
j=1;
assert.equal(j,1);
console.log(j);
const i=0;
assert.throws(
    ()=>{
        i=i+1
    },{
        name:'TypeError',
        message:'Assignment to constant variable.'
    }
)
//const with arrays
const arr=['Hello','world']
for(let elem of arr){
    console.log(elem);
}