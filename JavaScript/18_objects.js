const person1 = {
    name: "Ankit", // 'name' is a key, "Ankit" is the value
    age: 20, // 'age' id the key, "Ankit" is the value
    isStudent: true,
    city: "Purnea"
};

const person2= {
    name: "Piyush kumar", // 'name' is a key, "Ankit" is the value
    age: 20, // 'age' id the key, "Ankit" is the value
    isStudent: true,
    city: "Purnea"
};

//Object Literal Syntax (Most Common)
const car = {
  make: 'Toyota',
  model: 'supra',
  year: 2020,
  isElectric: false,
  start: function() {
    console.log('Engine started!');
  }
};

//new Object()
const car2 = new Object();
car.make = 'Toyota';
car.model = 'Camry';
// ... and so on
