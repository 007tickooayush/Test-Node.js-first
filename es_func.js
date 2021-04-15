//es6 arrow function definition
const add = (x,y) =>{
    let sum = x+y;
    console.log(sum);
}

//es6 arrow return 
const retAdd = (x,y) =>{
    let sum = x+y;
    return sum;
}

//es6 arrow return [arguments] 
const greet = x  => "Welcome "+x;

//es6 arrow return [!arguments] 
const writeAlert = () => console.log("Hi");

//es6 old and arrow default parameters
const es_test = (a,b=34,c=35) =>{
    console.log(a+b+c);
}

function test(a,b=34,c=35){
    console.log(a+b+c);
}

add(Math.PI,2);

console.log(retAdd(12345,6789));

writeAlert();

console.log(greet('Ayush'));
