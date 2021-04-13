function person(name,age){
    this.name = name;
    this.age = age;

    this.changeName = function(name){
        this.name = name;
    }
    this.yearOfBirth = bornYear;
}

//external change and definition
function bornYear(){
    return 2021 - this.age;
}

var p = new person("ayush",22);
p.changeName("T. Ayush ");

console.log(p.age);

// calling method linked to external initializer
console.log(p.yearOfBirth());

