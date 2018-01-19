//Object Destructuring
/*const person= {
  name: 'George',
  age: 31,
  location: {
    city: "Ngong",
    temp: 12
  }
};
const {name='Anonymous', age} = person;
//const name=person.name;
//const age=person.age;
console.log(`${name} is ${age}`);
const {city, temp:temperature} = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`)
}
*/
const book = {
  title: 'Ego is the enemy',
  author:'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};
const {name:publisherName = 'Self published'} = book.publisher;
console.log(publisherName);
//Array destructuring
const address = ['1299 S South Juniper Street','Philadelphia','Pensylvania','19283'];
const [, city, state] = address;
console.log(`your are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const[name,,price]=item;
console.log(`A medium ${name} costs ${price}`);
