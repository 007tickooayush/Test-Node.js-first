//spread: function calls
function myFunction(w,x,y,z){
    console.log(w+x+y+z);
}

let args = [1,2,3];
myFunction(...args,4);

var dateFields = [2000,8,1];

var date = new Date(...dateFields);
console.log(date);

//spread: array literals
var arr = ['One','Two','Five'];
arr.splice(2,0,'Three');
arr.splice(3,0,'Four');
console.log(arr);

var atf = ['Three','Four'];
var newArr = ['Zero',...atf];
console.log(newArr);

//spread:object literals
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({ ...objects });

let mergedObj = merge (obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = merge ({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }