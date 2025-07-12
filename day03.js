console.log("hello zain welcome again");
const now=new Date()
console.log(now);


const now1=new Date()
console.log(now1.getFullYear());


const now2=new Date()
console.log(now2.getMonth());


const now3=new Date()
console.log(now3.getDay());


const now4=new Date()
console.log(now4.getDate());

const now5=new Date()
console.log(now5.getHours());

const now6=new Date()
console.log(now6.getMinutes());


let firstName = "ZAIN";
let lastName = "ALIS SHAH";
let country = "PAKISTAN";
let city = "KARACHI";
let age = 30;
let isMarried = false;
let year = 2025;

console.log(typeof firstName); 
console.log(typeof lastName);  
console.log(typeof country);   
console.log(typeof city);     
console.log(typeof age);      
console.log(typeof isMarried); 
console.log(typeof year);    


// Check if parseInt('9.8') is equal to 10

parseInt('9.8') 
let base=20
let  height=10
let area=0.5*base*height
console.log(area);

let a= 5
let b= 4
let c= 3
let perimeter=a+b+c
console.log(perimeter);


let radius=25
const pi=3.142
let circlearea=2*pi*radius


let sloe1=2
let y_intecept=-2
let x_intercept=2/2
console.log(sloe1);
console.log(y_intecept);
console.log(x_intercept);

let x1=2,y1=2
let x2=6,y2=10
let slope2=(y2-y1)/(x2-x1)
console.log(slope2);


let hours=40
let rate=28
let pay=hours*rate
console.log(pay);


const now7 = new Date();

let year1 = now7.getFullYear();
let months = String(now7.getMonth() + 1).padStart(2, '0');  
let date = String(now7.getDate()).padStart(2, '0');         
let hours1 = String(now7.getHours()).padStart(2, '0');      
let minutes = String(now7.getMinutes()).padStart(2, '0');   

let formattedTime = `${year1}-${months}-${date} ${hours1}:${minutes}`;
console.log(formattedTime);



