console.log("Working on loop zain");
// for (let i=0;i<=5;i++){
//     console.log(i);
    
// }
// for (let i=5;i>=1;i--){
//     console.log(i);
    
// }

for(let i=1;i<=5;i++){
    console.log(`${i}*${i}=${i*i}`);
    
}

let countries=["pakistan","finland",'italy',"us","england","russia"]
let newArr=[]
for(let i=0;i<countries.length;i++){
    newArr.push(countries[i].toUpperCase())
    
}
console.log(newArr);


let mynums=[1,2,3,4,5,6,7]
let sum=0
for(i=0;i<mynums.length;i++){
    sum+=mynums[i]
    
    
}
console.log(sum);

for(let i=0;i<=5;i++){
    if(i==3){
        break
    }
    console.log(i);
    
}


for(let i=0;i<=5;i++){
    if(i==3){
        continue
    }
    console.log(i);
    
}

for(let i=0;i<=7;i++){
    console.log("#".repeat(i));
    
}


for(let i=1;i<=10;i++){
    console.log(`${i}*${i}=${i*i}`);
    
}
