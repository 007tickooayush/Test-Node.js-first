let person = {
    namse:'Jack',
    age:18,
    term:'VI'
};

let student = {
    name:'Bob',
    section:'A',
}

//properties get overridden
let newStudent = Object.assign({},person,student);


//example 2
let person = {
    name: 'Jack',
    age: 18
};

let newPerson = Object.assign({}, person, {name: 'Bob'});

console.log(newPerson.name); // Bob