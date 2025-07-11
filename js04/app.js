// Day 02
const PI = Math.PI

console.log(PI)                            
console.log(Math.round(PI));    //3 to round values to the nearest numbe
console.log(Math.round(4.98))     //5
console.log(Math.floor(PI));    //3 rounding down
console.log(Math.ceil(PI));    //3 rounding up
console.log(Math.min(5,10,2,9,15,20)); 
console.log(Math.max(-5,3,20,10,12,11));
console.log(Math.random()*11);
// Absolute
console.log(Math.abs(-20));
// Square root
console.log(Math.sqrt(100));
// power
console.log(Math.pow(5,2));

// String to Int
// We can convert string number to a number. Any number inside a quote is a string number.
//  An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

// parseInt()
let num="10"
let numInt=parseInt(num)
console.log(numInt);

// Number()
let num2 = '10'
let numInt2 = Number(num2)

console.log(numInt2) // 10

// Plus sign(+)
let num3= '10'
let numInt3 = +num3

console.log(numInt3) // 10
// Parsfloat
let num4="11.6"
let numflt=parseFloat(num4)
console.log(numflt);

// Print the length of the string on the browser console using console.log()
let mystr="Zain Ali shah "
console.log(mystr.length);
//Cut (slice) out the first word of the string using substr() or substring() method
let rmvestr="Zain Cover js"
console.log(rmvestr.substring(4,));
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let rmvestr1="30 Days of JavaScript"
console.log(rmvestr1.indexOf('a'));


// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// Use match() method to find all the a’s in 30 Days Of JavaScript
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// Use repeat() method to print 30 Days Of JavaScript 2 times


let trm="    Zain Ali Shah"
console.log(trm.trim());
let strt="30 Days Of JavaScript"
console.log(strt.startsWith('30'));
console.log(strt.startsWith('20'));
console.log(strt.endsWith('JavaScript'));
console.log(strt.endsWith('Python'));

let conct="30 days"
console.log(conct.concat(" Javascript"));

let rpet="30 Days Of JavaScript  "
console.log(rpet.repeat(" 2"));


let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))


let firstname="Zain"
let lastname="Ali Shah"
const age=21
const country ="Pakistan"
let job
console.log(typeof "Zain");
console.log(typeof "Ali Shah");
console.log(typeof 21);
console.log(typeof "Pakistan");
console.log(typeof null);
console.log(typeof job);
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof false);














  