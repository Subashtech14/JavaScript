let assert = require("assert");
{
  // // Scope A. Accessible: x
  const x = 0;
  assert.equal(x, 0);
  {
    // Scope B. Accessible: x, y
    const y = 1;
    assert.equal(x, 0);
    assert.equal(y, 1);
    {
      // Scope C. Accessible: x, y, z
      const z = 2;
      assert.equal(x, 0);
      assert.equal(y, 1);
      assert.equal(z, 2);
    }
  }
}
// Outside. Not accessible: x, y, z
assert.throws(() => console.log(x), {
  name: "ReferenceError",
  message: "x is not defined",
});
//Shadowing Variables
assert.throws(() => {
  eval("let x=1; let x=2;");
}, {
    name:'SyntaxError',
    message:"Identifier 'x' has already been declared"
});
