// debugger
const evenNumber = [2, 4, 6, 7, 10];
const x = evenNumber.some((num) => {
    return num % 2 === 1; // If any 1 condition are pass then return true othwewise return false
});
console.log(x);




const oddNumber = [3, 5, 7, 9];
const y = oddNumber.every((num) => {
    return num % 2 === 1; // if every condition are pass then return true otherwise return false
});
console.log(y);