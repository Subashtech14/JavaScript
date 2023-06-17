const assert = require("assert");

function fetchData(callback) {
  setTimeout(() => {
    callback(null, "data");
  }, 1000);
}

it("should fetch data asynchronously", function (done) {
  fetchData(function (error, result) {
    assert.strictEqual(error, null);
    assert.strictEqual(result, "data");
    done(); // Call done() to indicate the completion of the asynchronous test
  });
});
