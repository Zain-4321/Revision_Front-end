console.log("hello welcome again");
// mape transform every array and creat a new array

let arr=[45,36,23,44]
let a =arr.map((value)=>{
    console.log(value);
    
    return value+1
    
    // in this step mape add value and creat a new array


})
console.log(a);
// | **Parameter**  | **Matlab**                   | **Use**  |
// | -------------- | ---------------------------- | -------- |
// | `currentValue` | Har waqt array ka ek element | Zaroori  |
// | `index`        | Us element ka number (0 se)  | Optional |
// | `array`        | Poora array ka reference     | Optional |
let arr1=["Zain","Talha","Waqar","Salman"]
let b=arr1.map((curr,index,array)=>{
    console.log(curr,index,array);
    return curr
    
    

})
console.log(b);

let arr2=[69,75,31,13,59,71]
let c=arr2.map((curr,index,array)=>{
    console.log(curr,index,array);
    return curr+1
    
    

})
console.log(c);

// Array filter method
// filter() ek array method hai jo:

// Array ke har element ko check karta hai

// Jo element condition ko pura kare usko nikal leta hai

// Baaki ko ignore karta hai

// New array return karta hai (sirf filtered items)

let arr3=[69,75,31,13,59,71,17,5,21,25,27]
let d=arr3.filter((curr)=>{
    console.log(curr)
    return  curr>30
    
    

})
console.log(d);

// Array reduce
// reduce() array ke saare elements ko ek hi value mein convert karta hai.
// Jaise:

// Sum nikalna

// Product nikalna

// Object banana

// String join karna


const arr5=[1,2,5,6,7,1]
const newArr=arr5.reduce((h1,h2)=>{
    return h1+h2


})
console.log(newArr);

