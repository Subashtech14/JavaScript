function dem(...args){
    console.log(args);
}

dem(1,2,3,4,5,6,7,8,9,10);
const tmpl=(data)=>{
    return `Hello ${data.name}`
}
console.log(tmpl({
    name:"Subash"
},"Devil King"));