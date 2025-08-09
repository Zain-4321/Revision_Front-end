//Q1: Write a function that takes a number and returns true if it's a perfect square.

function isSqr(num){
if(num<0) return num;

const sqrt=Math.sqrt(num)
return sqrt===Math.floor(sqrt)

}
console.log(isSqr(25));
console.log(isSqr(16));
console.log(isSqr(-4));




//Q2: Create a function that removes all spaces from a string without using .replace().
function removesspace(str){
    let result=""
    for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            result+=str[i]
        }
    }

    return result
    
}


console.log(removesspace("ZAIN  ALI   SHAH"));
console.log(removesspace("Muhammd    Talha"));


//Q3: Write a function that returns the second largest number in an array.
function secondlargest(arr){
    let unique=[...new Set(arr)]
    if(unique.length<2) return null;

    unique.sort((a,b)=>b-a)
    return unique[1]


}

console.log(secondlargest([13,31,75,69]));
console.log(secondlargest([75,69,31,13]));
console.log(secondlargest([69,75,31,13]));


//Q4: Create a function that checks whether a string contains only digits (0-9).
function isOnlyDigit(str){
    return /^[0-9]+$/.test(str)
}

console.log(isOnlyDigit("0123456789"));
console.log(isOnlyDigit("Zian69"));
console.log(isOnlyDigit("moosa13"));
console.log(isOnlyDigit("69137531"));

//Q5: Make a function that takes a sentence and counts how many words are in it.


function countWords(sentence){
    if(!sentence.trim()) return 0
    const word=sentence.trim().split(/\s+/)
    return word.length

}
console.log(countWords("ZAIN  ALI  SHAH"));

//Q6: Write a loop that prints the multiplication table of 7 (from 1 to 10).

for(let i=1;i<=10;i++){
    console.log(7 ,'*',i,'=',7*i);
    
}

//Q7: Write a function that returns the sum of all digits in a number (e.g. 123 ➝ 6).

function sumallnums(num){
    let sum=0
    let str=Math.abs(num).toString()
    for(let i=0;i<str.length;i++){
        sum+=Number(str[i])
    }  
 return sum

}

console.log(sumallnums(123));
console.log(sumallnums(69133175))


//Q8: What will be the output of typeof NaN and why?
//NaN is a special value of the number type that represents an invalid number result.

//Q9: Create a function that returns true if a number is a palindrome (e.g. 121, 1221).unc


function isPlindrome(num){
    const str=num.toString()
    const reversed=str.split('').reverse().join('')
    return str===reversed

}

console.log(isPlindrome(121));
console.log(isPlindrome(1221));
console.log(isPlindrome(131));
console.log(isPlindrome(13));
//🟡 Q10: Write a function that filters all even numbers from an array (without using .filter()).


function filtereven(arr){
    let result=[]
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2===0){
            result.push(arr[i])
        }

    }
    return result
}

console.log(filtereven([1,2,3,4,5,6,7,8,9,10]));

// 🟡 Q11: What will be the output of:

console.log(0.1 + 0.2 === 0.3);

//their output is false
//Yeh exact 0.3 nahi hota — thoda sa zyada hota hai due to floating-point precision error.

// 🟡 Q12: Create a function that reverses the words in a sentence.
// 📌 "I love JavaScript" ➝ "JavaScript love I"


function reversedword(sentence){
    return sentence.trim().split(/\s+/).reverse('').join('')
}

console.log(reversedword("I  Love  JavaScript"));


// 🟡 Q13: Check whether a string is an email (basic check: contains @ and .)
function checksymbol(str){
    return str.includes("@")  && str.includes(".")
}

console.log(checksymbol("123@gmail.com"));
console.log(checksymbol("affridditha5002@gmail.com"));
console.log(checksymbol("123gmailcom"));


// 🟡 Q14: Create a function that returns the number of vowels in a string.
function counvovwel(str){
    let vowels="aeiouAEIOU"
    let count=0
    for(let char of str){
        if(vowels.includes(char))
            count++
    }
    return count
}


console.log(counvovwel("zain ali shah"));
console.log(counvovwel("ismain tera ghata"));
//🟡 Q15: Explain difference between == and === in JS with one example.




console.log(5 == "5");   // true  ✅ (value same, type convert ho gaya)
console.log(5 === "5");  // false ❌ (number !== string)

