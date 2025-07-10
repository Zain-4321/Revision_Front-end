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


const countries1=["Pakistan","Russia","India","Bangladesh","New zealand"]
countries1[1]="Usa"
console.log(countries1);

// fill
const arry=Array()
const my_values=Array(8).fill('Z')
console.log(my_values);


const arry1=Array()
const my_values1=Array(8).fill(69)
console.log(my_values1);


// concatenate two arrays.

const arrr1=[1,2,3,4,5]
const arrr2=[6,7,8,9,10]
const merge=arrr1.concat(arrr2)
console.log(merge.length); // check sze of array 

// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

console.log(arr1.indexOf(3.14));
console.log(arr1.indexOf(9.81));

// lastIndexOf: It gives the position of the last item in the array. If it exist, 
// it returns the index else it returns -1.

const numbers2 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log("Checking the last index ",numbers2.lastIndexOf(2));
console.log("Checking the last index ",numbers2.lastIndexOf(5));
console.log("Checking the last index ",numbers2.lastIndexOf(3));

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

const numbers3 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers3.includes(5));
console.log(numbers3.includes(3));
console.log(numbers3.includes(0));
console.log(numbers3.includes(8));

// Join
const names = ['Zain', 'Talha', 'Waqar', 'Salman']
console.log(names.join()) 
console.log(names.join(''))
console.log(names.join(' ')) 
console.log(names.join(', ')) 
console.log(names.join(' # ')) 


// Slice
const numbers4 = [1, 2, 3, 4, 5]
console.log(numbers4.slice());
console.log(numbers4.slice(3));
console.log(numbers4.slice(1,5));
console.log(numbers4.includes(1,3));

// Splice: It takes three parameters:Starting position, number of times to be removed and 
// number of items to be added.

const numbers5 = [1, 2, 3, 4, 5,6]

console.log(numbers5.splice()) // -> remove all items
console.log(numbers5.splice(0,1))
console.log(numbers5.splice(3,3,7,8,9)) //it removes three item and replace three items

// Push: adding item in the end. 
const plus=['item1','item2,',"item3"]
plus.push('newitem')
console.log(plus);
//pop: Removing item in the end.
plus.pop()
console.log(plus);

// shift: Removing one array element in the beginning of the array
const numbers7 = [1, 2, 3, 4, 5]
numbers7.shift()
console.log(numbers7);
numbers7.shift(3)
console.log(numbers7);


// Unshift adding one array elements in the beginning of the array

const numbers6 = [1, 2, 3, 4, 5]
numbers6.unshift(7)
console.log(numbers6);


// Ecercise
// Get the first item, the middle item and the last item of the array

const my_arr=[1,2,3,4,5,6,7,8]
console.log(my_arr.length);
console.log(my_arr[0]);
console.log(my_arr[0,4]);
const acces=my_arr.length-1
console.log(acces);

// Declare an array called mixedDataTypes, put different data types in the
//  array and find the length of the array. The array size should be greater than 5

const mix_typ=[10,"Zain",3.14,"Talha",true,5,"zeshan"]
console.log(mix_typ.length);
//Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies


const it_company=["Micrsoft","Google","Facebook","Meta","Ibm Pakistan","Apple","Samsung"]
it_company.reverse()
console.log(it_company);
const it_company1=["Micrsoft","Google","Facebook","Meta","Ibm Pakistan","Apple","Samsung"]
console.log(it_company1.slice(0,3))

const it_company3=["Micrsoft","Google","Facebook","Meta","Ibm Pakistan","Apple","Samsung"]
console.log(it_company3.slice(4,))

const it_company5=["Micrsoft","Google","Facebook","Meta","Ibm Pakistan","Apple","Samsung"]
console.log(it_company5[3])

const it_company6=["Micrsoft","Google","Facebook","Meta","Ibm Pakistan","Apple","Samsung"]
console.log(it_company6.splice(3,1))


const it_company7=["Micrsoft","Google","Facebook","Meta","Ibm Pakistan","Apple","Samsung"]
console.log(it_company7.pop())


const it_company8=["Micrsoft","Google","Facebook","Meta","Ibm Pakistan","Apple","Samsung"]
console.log(it_company8.splice())






