function getFoo(x){
    return x.foo;
}
console.log(getFoo(undefined));
console.log(getFoo(null));
console.log(getFoo(true));