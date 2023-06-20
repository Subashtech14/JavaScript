let demo = "Foo.txt";
console.log(demo.endsWith("txt"));
console.log(demo.includes("o"));
console.log(demo.indexOf("o"));
console.log(demo.lastIndexOf("o"));
console.log("ababb".match(/a(b+)/));
console.log("ababb".match(/a(?<foo>b+)/));
console.log("a2b".search(/[0-9]/));
//String prototype
console.log(demo.slice(1, 3));
console.log(demo.at(0));
console.log(demo.split("."));
console.log("ab".concat("cd", "ef", "gh"));
console.log("#".padEnd(2, "#"));
console.log("#".padStart(5, "abc"));
console.log("x.x.x.".replaceAll(".", "1Love"));
/*Apologies for the confusion. It seems there was a mistake in the previous response. The correct explanation of the expression `'a 1995-12 b'.replaceAll(/([0-9]{4})-([0-9]{2})/g, '|$2|')` is as follows:

The regular expression `/([0-9]{4})-([0-9]{2})/g` is used to match substrings that follow the pattern of a four-digit year followed by a hyphen and a two-digit month.

The replacement string `'|$2|'` specifies that the matched pattern should be replaced by the contents of the second capturing group, represented by `$2`, surrounded by vertical bars.

In the given string `'a 1995-12 b'`, the matching substring is `'1995-12'`. The regular expression captures the year `'1995'` in the first capturing group (`$1`) and the month `'12'` in the second capturing group (`$2`).

However, the incorrect part was that the `replaceAll()` function in JavaScript doesn't actually support the use of capturing groups (`$1`, `$2`, etc.) in the replacement string. So, in reality, the expression `'a 1995-12 b'.replaceAll(/([0-9]{4})-([0-9]{2})/g, '|$2|')` would replace the entire matched pattern `'1995-12'` with the literal string `'|$2|'`, resulting in `'a |$2| b'`.

Apologies for the confusion caused by the incorrect explanation. */
console.log("a 1995-12-12345 b".replaceAll(/([0-9]{4})-([0-9]{2}-([0-9]{5}))/g, "|$5|"));
console.log("ABC".toUpperCase());
console.log("ABC".toLowerCase());
console.log('\r\n#\t'.trim());
console.log(' abc'.trimEnd());
