let myVar;
console.log(myVar);
function func(x) {
  return x;
}
console.log(func(undefined));
//Nullish Coalescing operator
var a,b;
a=null;
b='love';
//variable ?? defaultvalue
console.log(a!==null??b!==undefined?a:b);