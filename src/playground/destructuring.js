// const person = {
//   name: "Andrew",
//   age: 26,
//   location: {
//     city: "liverpool",
//     temp: 23
//   }
// };

// const { name, age } = person;
// const name = person.name;
// const age = person.age;

// console.log(`${name} is ${age}.`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Pengiun"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147"
];
const [, city, state = "New York"] = address;
console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [coffee, , cost] = item;

console.log(`A medium ${coffee} costs ${cost}`);
