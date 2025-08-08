//🟡 Q1: Create a function that returns the factorial of a number.

function factorial(n){
    if(n<0){
        return "Fatcorial is not negative"
    }
    let result=1
    for(let i=2;i<=n;i++){
        result*=i
    }
    return result
}

console.log(factorial(5));
console.log(factorial(6));

// 🟡 Q2: Write a function that checks if a string starts with the letter "A".

function checstring(str){
    return str.startsWith("A")
}
console.log(checstring("Apple"));
console.log(checstring("Ali"));
console.log(checstring("Zain"));


// 🟡 Q3: Print all odd numbers from 1 to 15 using a loop.

for (let i=1;i<=15;i++){
    if(i%3==0){
        console.log(i,"Odd number");
        
    }
}
//🟡 Q4: Create a function that returns the average of 3 numbers.

function average(a,b,c){
    return (a+b+c)/3
}

console.log(average(3,7,5));
console.log(average(5,10,5));

//🟡 Q5: Make an array of 5 student names and print the total number of students.
let mystudents=["zain","hanzalah","shahwaiz","moosa","waqas",]
for (let i=1;i<=mystudents.length;i++){
    console.log(i);
    
}
//🟡 Q6: Create a function that takes a string and returns it in uppercase (no built-in .toUpperCase() allowed — use logic).
// function checkuppercase(str){

//     let result=""
//     for(let i=0;i<=str.length;i++){
//         let charCode=str.charCodeAt(i)
//         if(charCode<=97 && charCode>=122){
//      result += String.fromCharCode(charCode - 32);

//         }else{
//             result+=str[i]
//         }
//     }
//     return result
// }
// console.log(checkuppercase("zain ali shah"));


function toUpperCaseEasy(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let code = ch.charCodeAt(0);

    if (code >= 97 && code <= 122) {
      // agar choti letter hai, bari banado
      result += String.fromCharCode(code - 32);
    } else {
      // warna jaisa hai waisa hi daaldo
      result += ch;
    }
  }

  return result;
}
console.log(toUpperCaseEasy("hello"));    // HELLO
console.log(toUpperCaseEasy("Hi Zain!")); // HI ZAIN!
//🟡 Q7: Find the smallest number in an array [5, 2, 9, 1, 7].
function findsmallest(arr){
    let smallest=arr[0]
    for (let i=1;i< arr.length;i++){
        if(arr[i]<smallest){
            smallest=arr[i]
        }
    }
    return smallest
}

console.log(findsmallest([69,13,31,75]));


//🟡 Q9: Write a function that replaces all "a" in a string with "@".


function replacestring(str){
    let result =""
    for(let i=0;i<str.length;i++){
        if(str[i]==="a"){
        result+="@"
        }else{
    result+=str[i]
    }

}
return result

}

console.log(replacestring("zain ali shah"));
console.log(replacestring("talha"));


// 🟡 Q10: What will "5" * "2" return and why?
//output is 10 and its type is string
//🟡 Q11: Write a function that checks if a string is a palindrome (same forward & backward).


function isplaindrom(str){
    let rversed=""
    for(let i=str.length-1;i>=0;i--){
        rversed+=str[i]
    }
  return str=== rversed
}
console.log(isplaindrom("madam"));
console.log(isplaindrom("eye"));
console.log(isplaindrom("racecar"));
console.log(isplaindrom("toyota"));


//🟡 Q12: Create a loop that prints numbers from 10 down to 1.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}


function countApple(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "apple") {
      count++;
    }
  }

  return count;
}
const fruits = ["apple", "banana", "apple", "orange", "apple"];
console.log(countApple(fruits));  



function isMultipleOf3And5(num) {
  return num % 3 === 0 && num % 5 === 0;
}
console.log(isMultipleOf3And5(15)); 
console.log(isMultipleOf3And5(9));  
console.log(isMultipleOf3And5(10)); 
console.log(isMultipleOf3And5(30)); 



// 🟡 Q15: What is NaN in JavaScript?
// ✅ Definition:
// NaN stands for "Not a Number".
// It is a special value in JavaScript that means "this is not a valid number."

// ✅ When Does It Happen?
// It happens when:

// You try to do math with something that's not a number.

// Or when number conversion fails.



