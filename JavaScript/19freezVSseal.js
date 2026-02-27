const user = {
    firstName: 'Ankit',
    lastName: 'Thakur',
    address: {
        city: 'purnea',
        pincode: 854203,
        state: 'Bihar',
        moreDetails: {
            area: 'maranga',
            population: 523454,
        },
    },
    age: 20,
    isGraduate: false,
}

let lastName = 'kumar';

// Object.seal(user);
Object.freeze(user);