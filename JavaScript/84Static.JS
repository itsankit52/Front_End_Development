class Maths {

    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

// Access using class name 
const addition  =  Maths.add(12, 24);
console.log(addition);

console.log(Maths.multiply(10, 20));

// try to access using objects 

const obj1 = new Maths();
obj1.add(10,90);