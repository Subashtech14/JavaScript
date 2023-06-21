class CausedError extends Error {
  constructor(message, options) {
    super(message, options);
    if (isObject(options) && "cause" in options && !("cause" in this)) {
      // .cause was specified but the superconstructor
      // did not create an instance property.
      const cause = options.cause;
      this.cause = cause;
      if ("stack" in cause) {
        this.stack = this.stack + "\nCAUSE: " + cause.stack;
      }
    }
  }
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
