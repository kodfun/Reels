

// 4 Ways to Iterate Over an Array
const arr = ["how", "are", "you"];

// #1 for loop
for (let i = 0; i < arr.length; i++)
  console.log(arr[i]);

// #2 forEach()
arr.forEach(x => console.log(x));

// #3 for...in
for (const key in arr)
  console.log(arr[key]);

// #4 for...of
for (const x of arr)
  console.log(x);


































