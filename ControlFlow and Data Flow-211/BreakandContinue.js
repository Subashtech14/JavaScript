var assert=require('assert');
for(const x of ['a','b','c']){
    console.log(x);
    if(x === 'b'){break;}
    console.log('----')       
}
//Break With Label
my_label:{
    console.log("Breaked");
    var  condition=true;
    if(condition) break my_label;
}
//---------
function findSuffix(stringArray, suffix) {
  let result;
  search_block: {
    for (const str of stringArray) {
      if (str.endsWith(suffix)) {
        // Success:
        result = str;
        break search_block; // (A)
      }
    } // for
    // Failure:
    result = "(Untitled)"; // (B)
  } // search_block
  return { suffix, result };
  // Same as: {suffix: suffix, result: result}
}
assert.deepEqual(
findSuffix(['notes.txt', 'index.html'], '.html'),
{ suffix: '.html', result: 'index.html' }
);
assert.deepEqual(
findSuffix(['notes.txt', 'index.html'], '.mjs'),
{ suffix: '.mjs', result: '(Untitled)' }
);
