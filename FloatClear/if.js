const userName = 'Piyush Thakur';
const age = 20;

console.log(`Name : ${userName}`);
console.log(`Age : ${age}`);


console.log('Grade in collage:')

// let score ;
const score = prompt('Enter your score to find your grade in collage.')
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
}else {
    console.log("Grade: F");
}