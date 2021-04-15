//dynamic initialization
let set1 = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);
console.log(set1.size); // 5

//using Set Collection
let set = new Set();
set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

for (let v of set.values())
    console.log(v);

set.clear();