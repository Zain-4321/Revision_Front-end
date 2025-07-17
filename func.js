console.log("Hello Zain Learn Functions")

function sqr(){
    let num=5
    let sqr=num*num
     console.log(sqr);
     
}
sqr()
// Functions with parameters
function areacircle(r){
    let area=Math.PI*r*r
    return area
}
console.log(areacircle(10));

function sumtwonumbers(num1,num2){
    let sum=num1+num2
    return sum
}

console.log(sumtwonumbers(25,25));

// Arrow functions
const sqr3 =(n)=>{
return n*n
}
console.log(sqr3(4));

// const fullname=(firsname,lastname)=>{
//     return `${firsname} ${lastname}`

// }
// console.log(fullname("Zain ","Ali Shah"));

// default Parameter

function printfullname(firsname="Zain ",lastname="Ali Shah"){
    let fullname=firsname+lastname
    return fullname
} 

console.log((printfullname())); //this is default parameter
console.log((printfullname("Talha "))); //this is not default parameter update the value
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// function arraofreactangle(length,width){
//     return length*width

// }
// console.log(arraofreactangle(10,2))
//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

console.log(perimeterOfRectangle(5, 3)); 


//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function arraofreactangle(length,width,height){
    return length*width*height

}
console.log(arraofreactangle(10,2,2))

// Circumference of a circle is calculated as follows: circumference = 2πr. 
// Write a function which calculates circumOfCircle

function circumOfCircle(r){
    let circle= 2*Math.PI*r
    return circle
}
console.log(circumOfCircle(5));
// Speed is calculated by dividing the total distance covered by a moving object divided by 
// the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function calculatespeed(distance,time){
    return distance/time

}
console.log(calculatespeed(100,2));

function bmi(weight, height) {
    const bmiValue = weight / (height * height);
    
    if (bmiValue < 18.5) {
        return `Your BMI is ${bmiValue.toFixed(2)}: Underweight`;
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        return `Your BMI is ${bmiValue.toFixed(2)}: Normal weight`;
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        return `Your BMI is ${bmiValue.toFixed(2)}: Overweight`;
    } else {
        return `Your BMI is ${bmiValue.toFixed(2)}: Obese`;
    }
}
console.log(bmi(60, 1.7)); 

console.log(bmi(45, 1.7)); 

console.log(bmi(80, 1.7)); 

console.log(bmi(95, 1.7)); 

let months="july";
function checkseason(season){
    if(months ==="march" || months==="april" || months==="may"){
        return season ="Spring"
    }else   if(months ==="june" || months==="july" || months==="august"){
        return season ="Summer"
    }else   if(months ==="september" || months==="october" || months==="november"){
        return season ="Atumn"
    }else   if(months ==="december" || months==="january" || months==="febuary"){
        return season ="Winter"
    }
}
console.log((checkseason()));

function findMax(a,b,c){
    return Math.max(a,b,c)
}
console.log((findMax(13,31,75)));


// Declare a function name printArray. It takes array as a parameter and it prints out 
// each value of the array.
function printArray(...array){
    for(let i of array){
    console.log(i)
    }
}
console.log(printArray(5,10,15,20))

function showDateTime(){
    let now=new Date()
    let day=now.getDate().toString().padStart(2,'0')
    let month =(now.getMonth()+1).toString().padStart(2,'0')
    let year=now.getFullYear()
    let hours=now.getHours().toString().padStart(2,'0')
    let minutes=now.getMinutes().toString().padStart(2,'0')
    return `${day}/${month}/${year} ${hours}:${minutes}`
}
console.log(showDateTime());



function swapevalue(x,y){
    [x,y]=[y,x]
    return {x,y}
}
console.log(swapevalue(3,4));
console.log(swapevalue(4,5));






function arrayOfHexaColors(count) {
    const colors = [];
    const hexChars = '0123456789ABCDEF';

    for (let i = 0; i < count; i++) {
        let color = '#';
        for (let j = 0; j < 6; j++) {
            color += hexChars[Math.floor(Math.random() * 16)];
        }
        colors.push(color);
    }

    return colors;
}
console.log(arrayOfHexaColors(5));




