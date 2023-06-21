//For Loop
for (let i = 0; i < 33; i++) {
  console.log(i);
}
//For -of Loop
const iterable=['hello','world']
for(const elem of iterable)
console.log(elem);
//Iterating  over[index,elem] pairs of Arrays
const arr=['a','b','c'];
for(const [index,elem] of arr.entries()){
    console.log(`${index} -> ${elem}`);
}
//for in loops
const arr1=['a','b','c'];
arr1.propKey='property value';
for(const key in arr){
    console.log(key);
}