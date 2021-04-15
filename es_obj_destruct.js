//es6 obj destruction(unpacking)
let obj = {h:100,s:true};
let {h,s} = obj;
console.log(h,s);

//dynamic assignment
let a,b;
({a,b} = {a:'hello',b:'Jack'});

console.log(a+b);


//default assignment
var obj = {id:42,name:'Great'};
let {id=10,age=20} = obj;

console.log(id);
console.log(age);
