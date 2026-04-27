const fruits = ['apple', 'banana', 'grapes', 'mango', 'papaya'];
fruits.forEach(function (item) {
    console.log(item);
});


//using arrow function
const number = [10, 20, 30, 40];

number.forEach((num,indexValue) => {
    console.log(`Index ${indexValue+1} : ${num}`);
})

//Accessing array and index 

let country = ['India', 'Russia', 'Japan', 'China','Africa'];
country.forEach((country, index) => {
console.log(`Country ${index + 1}: ${country}`);
});
