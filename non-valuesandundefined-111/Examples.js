var assert=require("assert")
const { log } = require("console")
// function getTitle(fileDesc) {
//   return fileDesc.title ?? "(Untitled)";
// }
// const files = [{ path: "index.html", title: "Home" }, { path: "tmp.html" }];
// assert.deepEqual(
//   files.map((f) => getTitle(f)),
//   ["Home", "(Untitled)"]
// );
const books =[
    {
        isbn: 123,
    },
    {
        title:'ECMAScript Language Specification',
        isbn:456,
    }
]
for(const book of books){
book.title??="Untitled"
}
log(books)