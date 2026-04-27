class Student {
    constructor(name, branch) {
        this.name = name;
        this.branch = branch;
    }
}

const s1 = new Student("Ankit", "CSE");
console.log(s1.name);   // Ankit
console.log(s1.branch);   // CSE

const s2 = new Student ("Piyush", "NONE");
console.log(s2.name);
console.log(s2.branch);