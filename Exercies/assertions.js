const assert = require("assert");

// Use dynamic import() instead of require()
import("./id.mjs")
  .then((module) => {
    const { id } = module; 
    // Destructure the id function from the module

    // Define your test using assert methods
    try {
      assert.strictEqual(id(2), 1);
      console.log("Test passed successfully");
    } catch (error) {
      console.error("Test failed:", error);
    }
  })
  .catch((error) => {
    // Handle any errors that occur during the import
    console.error(error);
  });
