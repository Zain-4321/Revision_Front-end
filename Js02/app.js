// Day 02 Exercise Que/stion

// 1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

challenge="30 Days Of JavaScript"
console.log(challenge);

// 2.Print the string on the browser console using console.log()
console.log("Hello, World");

// 3.Print the length of the string on the browser console using console.log()
let str="Hello World"
console.log(str.length);


// 4.Change all the string characters to capital letters using toUpperCase() method

let str1="zain ali shah"
console.log(str1.toUpperCase());

// 5.Change all the string characters to lowercase letters using toLowerCase() method

let str2="ZAIN ALI SHAH"
console.log(str2.toLowerCase());
// 6.Cut (slice) out the first word of the string using substr() or substring() method

let sts3="Hello World"
let firstword=sts3.substring(0,sts3.indexOf(" "))
console.log(firstword);   //str.substring(0, ...) extracts from the beginning up to (but not including) the space.

// Start se shuru hota hai, aur jitne characters chahiye utne deta hai	
let sts="Hello World"
let firstword1=sts.substring(0,sts.indexOf(" "))
console.log(firstword1);   

// Array
const numbers=[0,0.314,0.24,1.56,1.9]
console.log(numbers);

const arr = [
  'Zain',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
] // arr containing different data types
console.log(arr)
// we can split a string at different positions, and we can change to an array
let js="JavaScript"

const changeinarr=js.split('')
console.log(changeinarr);

let companies="Facebook ,Google,Meta,Microsft,Apple,Samsung"
const arrchange=companies.split(',')

console.log(arrchange);

// access last item
const arr1 = [0, 3.14, 9.81, 37, 98.6, 100] 
let lastitem=arr1.length-1
console.log(arr1[lastitem]);


// An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.

const digits=[1,3,5,7,9,11]
digits[0]=10
digits[2]=4
console.log(digits);


