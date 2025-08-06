//🟡 Q1: Write a function that returns the cube of a number.

function cube(num){
    return num*num*num
}

console.log(cube(3));


// 🟡 Q2: Create a function that checks if a number is divisible by 3.
function divisibleby3(num1){
    return num1 %3===0
}
console.log(divisibleby3(12));


//🟡 Q3: Write a function that adds all numbers from 1 to 10 using a for loop.
function add(){
let sum=0
for (let i=1;i<=10;i++){
    sum+=i
}

return sum

}
console.log(add());
//🟡 Q4: Create a function that takes two numbers and returns the bigger one.

function biggerone(a,b){
    return a>b 
}

console.log(biggerone(8,5));

//🟡 Q5: Write a loop that prints even numbers from 1 to 20.
for (let i=1;i<=21;i++){
    if(i%2==0){
        console.log(i,"Even Number");
    }
        
    // }else{
    //     console.log(i,"odd number");
        
    // }
}

//🟡 Q6: Create a function that checks if a string is longer than 5 characters.
function isLong(str){
    return str.length>5

}
console.log(isLong("Zain Ali"));

//🟡 Q7: Create an array of 4 numbers and return the last number.
let myarr=["apple","banana","orange","mango"]

console.log(myarr[myarr.length-1]);


//🟡 Q8: Use pop() to remove the last element from an array of cities.
let cities = ["Karachi", "Lahore", "Islamabad"];

cities.pop()
console.log(cities);


//🟡 Q9: Sum of first and last element in array

function sumofelem(arr){
    return arr[0]+arr[arr.length-1]

}
console.log(sumofelem([69,13,31,75,11]));
// 🟡 Q10: Output of "5" - 2
// without + all operators allowed with string 
//output is 3

//🟡 Q11: Return "adult" or "minor"


function checkAge(adult){
    return adult>18 ? "adult":"minor"
}

console.log(checkAge(21));

// 🟡 Q12: null + 1 result
//in js null is 0 so answers is 1

//🟡 Q13: Check if number is prime

//14 revese a string
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("JavaScript")); // tpircSavaJ





// 🟡 Q15: Difference: var, let, const
// var: Function-scoped, re-declarable.

// let: Block-scoped, re-assignable, not re-declarable.

// const: Block-scoped, not re-assignable.

// 📘 Block scope ka matlab {} ke andar limited hona.

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}
console.log(isPrime(7));
