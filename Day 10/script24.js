//Day 24

// Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. 
// Explain how the let keyword affects the visibility of the loop variable.

// function LOOP(){
//     for(i=1;i<=5;i++){
//         console.log(i);
//     }
// }
// LOOP();


//Compare `let` and `const`: Create two examples where `let` allows reassignment but `const` 
//does not. Try to reassign a `const`-declared variable and catch the error.

// Using `let` for a variable that can be reassigned

// let age = 25;
// age = 26; // Works fine because `let` allows reassignment
// console.log(age); // Shows 26

// // Trying to reassign a `const`-declared variable
// const name = "Alice";
// name="Alice"; //Note reasigned
// console.log(name);




//Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with ``
//  that uses both `let` and `const`. Show how variables declared inside the block are not
//   accessible outside of it.

function blockScopeExample() {
    if (true) {
        let x = 10;
        const y = 20;
        console.log("Inside block:");
        console.log("x =", x); // Output: x = 10
        console.log("y =", y); // Output: y = 20
    }

    // Trying to access x and y outside the block
    console.log("Outside block:");
    console.log("x =", x); // ReferenceError: x is not defined
    console.log("y =", y); // ReferenceError: y is not defined
}

blockScopeExample();

