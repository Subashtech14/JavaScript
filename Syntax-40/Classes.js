class Person {
  constructor(name) {
    this.name = name;
  }
  describe() {
    return `Person named ${this.name}`;
  }
  static logNames(persons) {
    for (const person of persons) {
      console.log(person.name);
    }
  }
}
class Employee extends Person {
  constructor(name, title) {
    super(name);
    //7.1 An overview of JavaScript’s syntax 43
    this.title = title;
  }
  describe() {
    return super.describe() + ` (${this.title})`;
  }
}
const persons = [{ name: "John" }, { name: "Jane" }, { name: "Alice" }];

Person.logNames(persons);

const jane = new Employee("Jane", "CTO");
console.log(jane.describe());
