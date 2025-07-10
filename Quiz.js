// //Q1
// //Explain the difference between == and === in your own words.
// // Q1: What will be the output of the following code?
// let x = 5;
// let y = "5";
// console.log(x == y); // ?
// console.log(x === y); // ?
// // in this code x==y is true becuse this operator check the equality
// // and next x===y is false because this operator check the datatype whwn in inteheger and one is string 


// // Q2: Print all even numbers from 1 to 20 using a for loop.

 for (let i=1;i<=20;i++){
     if (i%2==0){
            console.log(i);

    }
 }

// // Q3: Write a function called `multiply` that takes two numbers and returns their product.
// function multiply(a,b){
//     return a*b
// }

// console.log(multiply(2,5));


// // Q4: Given this array:
// let fruits = ["apple", "banana", "cherry"];
// fruits.push("Orange")
// console.log(fruits.indexOf("banana"),1);
// console.log(fruits);
// // Add "orange" at the end, and remove "banana". Then print the updated array.

// // Q5: Extract the first word from this string:
// let str = "Hello JavaScript World";
// console.log(str.slice(5));

// Q6: Write a function `checkAge` that takes age as input. 
// If age is 18 or more, return "Eligible", else return "Not eligible".

// age=prompt("Enter an age")
// function checkAge(age){
  
//     if(age>=18){
//         console.log("egliblebe");
        
//     }else{
//         console.log("Not eglibilbe");
        
//     }
// }
// console.log(checkAgeNumber((age)));

// Q7: Print numbers from 10 down to 1 using a while loop.

let num = 10
while (num >= 1){
    console.log(num);
    
    num -= 1
}

// Q8: Create an object called `student` with properties: name, age, and isEnrolled.
// Then print the student's name.

const students={
    name:"Zain",
    age:21,
    isEnrolled:true
}
console.log(students.name);
console.log(students.age);
console.log(students.isEnrolled);
// Q9: What will be the output?
let a;
let b = null;
console.log(typeof a); // type of a in undefinend 
console.log(typeof b);  // type of b is object


// Q10: What will be the output?
console.log("10" + 5);   // 10i string and 5 in integers output is 105
console.log("10" - 5);   // now all operators allow without + output is 5 

// Q12: What will be the output?
let c = true;
let d = false;
console.log(c && d); // flase
console.log(c || d); // true

// Q14: Write a function to reverse a given string. 
// Example: reverseString("hello") => "olleh"

let str1="Hello"
let reversed=''
for (let i=str1.length-1 ; i>=0;i--){

    reversed += str1[i]

}
console.log(reversed);
// Q15: Fix the error in this code:
function add(a, b) {
    return a + b
}
console.log(add("2", 3)); // Expected: 5
// in this code the error is becuase the first argument is string if we want to result is 5 we give it int  integer
// formate then console.log(add(2, 3));

