// const parent = {
//     greet() {
//         console.log("Hello From Parent");
//     }
// };

// const child = {
//     Name: "Piyush"

// };

// child.__proto__ = parent;

// child.greet(); // Hello From Parent

/*VISUAL DIAGRAM 

    child
      |
      v
    parent
      |
      v
    Object.prototype
      |
      v
    null
*/


// "extend" Keyword *********************************************

// class Person {
//     constructor(Name) {
//         this.Name = Name;
//     }

//     //Method
//     intro() {
//         console.log(`Hello, I'm ${this.Name}`);
//     }
// }

// class Student extends Person {
//     //Method 
//     study() {
//         console.log(`${this.Name} is Sleeping.`);
//     }
// }

// const Student1 = new Student("Chinna Swami");
// Student1.intro(); // Inherited from person class 
// Student1.study(); // Own Method

/*How it internally works

    Student.prototype → Person.prototype → Object.prototype

*/

// const P1 = new Person("Piyush");
// P1.intro();



// "super" Keyword ********************************************

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Student extends Person {
//     constructor(name, rollNo) {
//         super(name);   //call Person constructor
//         this.rollNo = rollNo;
//     }

//     info() {
        // console.log(`Person Name is : ${this.name} \nRoll No. is : ${this.rollNo}`);
//     }
// }

// const s1 = new Student("Ankit Thakur", 12312);
// s1.info();  // Ankit 12312



function greet(city) {
    console.log(this.name + " From " + city);
}

const user = {
    name: "Ankit"
};

greet.call(user, "Delhi"); // Ankit From Delhi
greet.apply(user, ["Pune"]); // Ankit From Pune

const newFunction = greet.bind(user);
newFunction("Kolkata"); // Ankit From Kolkata