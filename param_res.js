//arrow function gives all as monotone outputs [true|false]

// const containsAll = (arr) =>{
//     for(let i = 1;i<arguments.length;i++){
//         let num = arguments[i];
//         if(arr.indexOf(num) === -1){
//             return false;
//         }
//     }
//     return true;
// };

//in standard definition error free
function containsAll(arr) {
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}

let x = [2,3,4,5,6];

console.log(containsAll(x,2,4,6,3));
console.log(containsAll(x,1,9,20));

//standard definition using ...args
function containsAll(arr,...nums){
    for(let num of nums){
        if(arr.indexOf(num) === -1){
            return false;
        }
    }
    return true;
}

let arr = [1,2,3,4,5];
console.log(containsAll(arr,1,2,3));
console.log(containsAll(arr,6,2,9));


function magic(...nums) {
    let sum = 0;
    nums.filter(n => n % 2 == 0).map(el => sum+= el);
    return sum;
}

console.log(magic(1, 2, 3, 4, 5, 6));