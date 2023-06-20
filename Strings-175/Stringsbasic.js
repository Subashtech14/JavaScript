//Strings are primitive values in javascript and immutable
console.log('Don\'t say "Good Bye"');
console.log(String(undefined));
console.log(String(null));
//No negative indices allowed
const str3 = "absc";
console.log(str3[0]);
//Negative Indices allowed only when using at
console.log(str3.at(-1));
console.log("abca".includes("a"));
console.log("abca".indexOf("a"));
//split
const str = "Hello, World!";
const parts = str.split(", ");
console.log(parts);
//join
console.log(parts.join(","));
//Padding meands adding
console.log("7".padStart(3, "0"));
console.log("7".padEnd(3, "0"));
console.log("\t abc \n".trim());
//Repeat
console.log("*".repeat(5));
console.log({ a: 1 });
//String comparision
console.log("A" < "B");
console.log("ä" < "b");
//Working with code Points
console.log("\u{1F600}");
console.log("\u{1F642}");
//converting string to unicode
console.log(String.fromCodePoint(0x1f644));
//Converting unicode to string
console.log("😀".codePointAt(0).toString(16));
//converting letters to individual arrays
console.log(Array.from("sdfsgs"));
console.log(Array.from("😀a"));
console.log('He\x6C\x6Co');