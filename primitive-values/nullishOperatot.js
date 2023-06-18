var assert=require('assert');
const { log } = require('console');
function countMatches(regex, str) {
  const matchResult = str.match(regex); // null or Array
  //it returns null or array
  //return (matchResult ?? []).length;
  return matchResult?.length ?? 0; //optional chaning
}
log(countMatches(/a/g, "ababa")+
"\n"+countMatches(/b/g, "ababa")+
"\n"+countMatches(/x/g, "ababa"));
assert.equal(countMatches(/a/g, "ababa"), 3);
assert.equal(countMatches(/b/g, "ababa"), 2);
assert.equal(countMatches(/x/g, "ababa"), 0);
