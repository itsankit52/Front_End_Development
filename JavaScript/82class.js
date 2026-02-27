class Employee {
    constructor(Name, Salary) {
        this.Name = Name;
        this.Salary = Salary;
    }

    information() {
        console.log(`Empolyee Name is : ${this.Name}, Salary is ${this.Salary}`);
    }
}

//Creating 1st Objects using Class 
let E1 = new Employee("Ramesh");
E1.information(); // Yaha pe name "Ramesh" print hoga, AUR kyuki Salary pass nhi kiya gya hai issliye "Salary" undefined hoga

// Cresting 2nd Object
const E2 = new Employee("Raja", 20000);
E2.information(); // Yaha pe name "Raja" print hoga, AUR Salary "20000" print hoga