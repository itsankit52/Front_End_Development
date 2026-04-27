// // Public Method
// console.log("Public Methods");
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Public method
//     intro() {
//         console.log("Hii, I'm " + this.name, `and Age is : ${this.age}`);
//     }
// }

// const s1 = new Student("Ankit", 22);
// s1.intro();   // Allowed

// s1.name = "Piyush"; // Not secure -> Anyone can change 
// s1.intro();


// // Private Method
// console.log(" ");
// console.log("Private Method");

// class Employee {
//     #age
//     #name
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }

//     // Public method
//     intro() {
//         console.log("Hii, I'm " + this.#name, `and Age is : ${this.#age}`);
//     }
// }

// const E1 = new Employee("Ankit", 22);
// E1.intro(); 



class ATM {
    // #validatePin(pin) {
    //     return pin === 9608;
    // }
    #pin = 9608;

    withdraw(pin, amount) {
        // if (this.#validatePin(pin)) 
        if (this.#pin) 
            console.log("Withdraw successful:", amount);
        
        else 
            console.log("Invalid PIN");
        
    }
}

const atm = new ATM();
atm.withdraw(9608, 1500);   // Withdraw successful
// atm.withdraw(1111, 500);   // Invalid PIN
