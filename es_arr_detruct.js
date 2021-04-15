let arr = [1,2,3];
let [one,two,three] = arr;

console.log(one);
console.log(two);
console.log(three);

//using a function

let a = () =>{
    return [1,3,2];
};

let [one, ,two] = a();

console.log(one,two);

//swapping using arr destruction
let a,b,c = 4,d = 8;
[a,b=6] = [2]; //a=2 , b:default
console.log(c,d);
[c,d] = [d,c];

console.log(c,d);

