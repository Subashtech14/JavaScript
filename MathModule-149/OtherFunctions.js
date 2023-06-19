//Returns the absolute value of x(No minus sign)
console.log(Math.abs(-3))
//Counts the leading zero bits in the 32-bit integer x. Used in DSP algorithms
console.log(Math.clz32(0o11111));
//Random integer
function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}
getRandomInteger(10);
//Math.min and Math.max
console.log(Math.min(1, 2, 3, 4));
console.log(Math.max(1, 2, 3, 4));
//Sign
console.log(Math.sign(-8))