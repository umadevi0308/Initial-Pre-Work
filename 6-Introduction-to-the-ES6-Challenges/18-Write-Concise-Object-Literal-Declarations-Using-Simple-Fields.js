//This lesson is about Writing Concise Object Literal Declarations Using Simple Fields. It adds some nice support for easily defining object literals.
const createPerson = (name, age, gender) =>({ name, age, gender});

console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
