function throwsException() {
  throw new Error("Problem!");
}
function catchesException() {
  try {
    throwsException();
  } catch (err) {
    console.log(err);
  }
}
catchesException();
