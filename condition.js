console.log("hello xzian");

let age=30

if (age>18){
    console.log("you are old to derive");
    
}else{
    console.log("You are not od derive");
    
}


let yourAge=21
let myAge=21

if(yourAge>myAge){
    console.log("You are older than me ");
    
}else if(yourAge<myAge){
    console.log("I am older than you");
    
}else{
    console.log("we are same");
    
}

let score=78
let grade;
if (score>=80 && score<=100){
   grade="A"
}else if (score>=70 && score<=79){
    grade="B"
}else if (score>=60 && score<=69){
    grade="C"
}else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
} else {
  grade = "Invalid score";
}

console.log("Your grade is:", grade);


let month="january"
let seasons;

if(month==="september"||month==="october"||month==="november"){
    seasons="Atumn"
}else if(month==="december"||month==="january"||month==="febuary"){
    seasons="Winter"
}else if(month==="march"||month==="april"||month==="may"){
    seasons="Spring"
}else if(month==="june"||month==="july"||month==="august"){
    seasons="Summer"
}else {
  seasons = "Invalid month entered.";
}

console.log("The season is:", seasons);

let day="thursday"
day=day.toLowerCase()
if (day==="saturday" || day==="sunday"){
    console.log("Weekends days");
    
}else if (
     day==="monday"  ||
     day==="tuesday"  ||
     day=="wednesday"  ||
     day=="thursday"  ||
     day=="friday"  
){
    console.log("Worked Days");
    
}else{
    console.log("Inavlid Days")
    

}