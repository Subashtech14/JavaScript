var answer = "Subash";
var assert=require('assert');
if (answer) {
  console.log("Hi");
} else if (answer === "Subash") {
  console.log("Hello");
} else {
  console.log("Bye");
}
//Switch Case
function dayOfTheWeek(num) {
  switch (num) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
        return "No such day";
  }
}
assert.equal(dayOfTheWeek(5), "Friday");
//While Loop
const arr = ["a", "b", "c"];
while (arr.length > 0) {
  const elem = arr.shift(); // remove first element
  console.log(elem);
}
//Do While Loop
let input;
do {
  input = ":q";
  console.log(input);
} while (input !== ":q");
