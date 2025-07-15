//day 23
// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents
//  a number (e.g., `5`). Return their sum as a number.

// function Arithmetic(number,string){

//     return number+string;
// }

// console.log(Arithmetic(25, +"25"));

//Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. 
//Round the result to two decimal places.


// function Multiple(num,num2){

//     return Math.round(num*num2*100)/100
// }
// console.log(Multiple(0.5,0.5));



// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the 
// quotient and the remainder. Use an object to return both values.



// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(
//     dividend
//     divisor
//   ): 
{ quotient: number; remainder: number } {
//     // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    // Returns both in an object
    return { quotient, remainder };
  }
  
  // Trying it with 10 divided by 3
  console.log(divideAndRemainder(10, 3)); 
  // It shows how many times 3 goes into 10, and what's left over.
                