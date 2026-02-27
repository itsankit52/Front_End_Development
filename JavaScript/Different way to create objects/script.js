// 1. Object Literals
console.log("Object Literals");


let user = {
    Name: "Piyush",
    Age: 22,
    intro: function () {
        console.log(`My Name is ${this.Name}, My age is ${this.Age}`);
    }
}

user.intro();


// 2. Factory Function 
console.log(" ");
console.log("Factory Function");
function CreatUser(Name, Age) {
    return {
        Name,
        Age,
        introduce: function () {
            console.log(`MY NAME IS ${this.Name}, MY AGE IS ${this.Age}`);
        }
    }
}

let user1 = CreatUser("ANKIT", 20);
let user2 = CreatUser("PIYUSH", 22);

user1.introduce();
user2.introduce();


// 3. Construtor Function
console.log(" ");
console.log("Construtor Function");
function Student(name, age) {
    this.name = name;
    this.age = age;
}

let S1 = new Student("Ramesh", 30);
let S2 = new Student("Raja Ram", 60);
console.log(`My name is ${S1.name}, My age is ${S1.age}`);
console.log(`My name is ${S2.name}, My age is ${S2.age}`);


// CLASS (ES6)
console.log(" ");
console.log("Class (ES6)");

class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hii, My name is ${this.name}, Age is ${this.age}`);
    }
}

// Creating object
const p1 = new Employee("Ankit", 22);
p1.greet();

