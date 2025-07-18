console.log("Hello Zain we learn object");

const reactangle={
    length:"20",
    with:"20",
}
console.log(reactangle);

const person={
    firstname:"Zain",
    lastname:"Ali Shah",
    age:21,
    country:"Pakistan",
    city:"Karachi",
    skills:[
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Python",
        "C",
        "C++"
    ],
    getFullName:function(){
        return `${this.firstname} ${this.lastname}`
    }
}
// Using get values .
console.log(person);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.country);
console.log(person.city);
console.log(person.skills);
// using get values sqr bracket
console.log(person['firstname']);
console.log(person['lastname']);
console.log(person['age']);
console.log(person['country']);
console.log(person['city']);
console.log(person['skills']);
console.log(person.getFullName());

const dog={
    name:"Tommy",
    legs:"4",
    color:"Brown",
    age1:"3",
    barke:function(){
        return "WOOF  WOOF"
    }

}
// console.log(dog.name);
// console.log(dog.color);
// console.log(dog.legs);
// console.log(dog.age1);
// console.log(dog.barke());
dog.breeds="German Shepperd"
dog.getInfo=function(){
      return `Name:${this.name},Breed:${this.breeds},Color:${this.color},Legs:${this.legs},Bark Sound:${this.barke()}`

}
console.log(dog.getInfo());


const countries={
    Pakistan:{
    capital:"Islamabad",
    population:"240 Millions",
    language:["Urdu","Englis"]
    },
    Usa:{
    capital:"Washinton D.C",
    population:"331 Millions",
    language:["English"]

    }
}
for (let i in countries){
    console.log(`Country:${countries}`);
        console.log(`Capital: ${countries[i].capital}`);
    console.log(`Population: ${countries[i].population}`);
    console.log(`Languages: ${countries[i].language.join(", ")}`);
    console.log("------------");
}
    
// const newUser = {
//     Zain: {
//         email: 'zain@example.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 22,
//         isLoggedIn: true,
//         points: 60
//     }
// };

// const updatedUsers = { ...users, ...newUser };

// console.log(updatedUsers);









