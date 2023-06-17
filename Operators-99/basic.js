console.log('7'*'2');
console.log([1,2,3]+[4,5,6]);//Simple concatenation
//Double equals Problem
console.log('123'==123);
console.log(''==0);
//=== Equal compares the Data Type
console.log('123'===123);
//Object.is is Stricter than === 
console.log(Object.is('123',123));
//it discards the evaluated result of expression and returns undefined
//it also used to prevent a new page when clicking on hyperlink
console.log(void(3+2));//Void is a Null 