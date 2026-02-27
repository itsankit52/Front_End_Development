const user = {
    Name: "Piyush",
    LastName: "Thakur",
    Age: 22,
    getAge:function () {
    return new Date().getFullYear() - user.Age;
}
};


console.log(getAge(user.Age));