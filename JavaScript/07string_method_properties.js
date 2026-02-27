const massage = "HElLO WorlD!";
const a = massage.toLowerCase() // convert into lower case 
const b = massage.toUpperCase() // convert into upper case 
// const x = massage.at(1) // 1st index pe jo character hai wo aayega
console.log( massage.length) // Give length of string

const print = "Hi,, I am ankit."

const replaced = print.replace('ankit' , 'piyush')

const lastFourDigits = "1234"

const addpadstartlastFourDigits = lastFourDigits.padStart(16,'*')
const addpadendlastFourDigits = lastFourDigits.padEnd(16,'*')

const TemplateString = `My information ${print}`
const templateString = `My information ${print.replace('ankit', 'Piyush Thakur')}`