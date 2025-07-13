console.log("Hi ZAIN ALI SHAH");
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
// Get the first item, the middle item and the last item of the array

 myarr1=[10,20,30,40,50,60]
 console.log(myarr1[0]);
 const middle=(myarr1.length/2)
console.log(middle);
console.log(myarr1[myarr1.length-1]);


const itCompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle"," Amazon"]
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
const midddleCompany=Math.floor(itCompanies.length/2);
console.log(itCompanies[midddleCompany]);
console.log(itCompanies[itCompanies.length-1]);
for (let i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i].toUpperCase());
    
}

const itCompanies1=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle"," Amazon"]
console.log(`${itCompanies1.slice(0,-1).join(' ')} and ${itCompanies1[itCompanies1.length-1]} are big IT Companies`);
const check="Google"
if(itCompanies1.includes(check)){
    console.log("Yes it is exists");
    
}else{
    console.log("Not Exist");
    
}

// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies

let nums=[10,9,8,7,6,11,13,15,14,16,17,5]
nums.sort()
console.log(nums.reverse());
console.log(nums.slice(0,3));
console.log(nums.slice(9,));

const itCompanies2=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle"," Amazon"]
console.log(itCompanies2.pop());
console.log(itCompanies2);
console.log(itCompanies2.splice());

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages);
let max=26
let mins=19
let range=max-mins
console.log(range);
let sum=ages.reduce((acc,cur)=>acc+cur,0)
const avge=sum/ages.length
console.log(avge);
let minDiff=Math.abs(mins-avge)
let maxDiff=Math.abs(max-avge)
console.log(minDiff);
console.log(maxDiff);
















