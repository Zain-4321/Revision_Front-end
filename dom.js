// DOm Manipulations
// Html sy element select karna
// text badalna
// html badalna
// css badalna
// attribuute 
// event listner
// hum html sy tag ko insay select kartay hain
// document.querySelector()
// document.querySelectorAll()
// //id say select karna
// document.getElementById()
// // class name say select karna
// document.getElementsByClassName()


// Manipulation
// innerHtml,innerText,textContect se hum html change kartaty hain
// innerHtml badalta ha
// let h1=document.querySelector("h1")
// h1.textContent="This is Zain Ali Shah"


//  let h1=document.querySelector("h1")
//  h1.innerText="This is Zain Ali Shah Learn Js"

// Change the html
// let h1=document.querySelector("h1")
// h1.innerHTML="<i>This is Zain Ali Shah</i>" //change tage in italic
// h1.hidden=true


// Attributes
//setAttribute
// let a=document.querySelector("a")
// a.setAttribute("href","https://www.google.com")

// let img=document.querySelector("img")
// img.setAttribute("src","https://images.unsplash.com/photo-1743328008236-894ce463461e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8")
//getAttribute
// let a=document.querySelector("a")
//console.log(a.getAttribute("href"));
// removeAttribut
// let a=document.querySelector("a")
// a.removeAttribute("href");


// //Dynmic Dom
// let h1=document.createElement("h1")
// h1.textContent="Ghar jao or khana khao or phir wapis ao"
// document.querySelector("h1").append(h1)   //append or prepend dono say karsakhtay hain

// let h1=document.createElement("h1")
// h1.textContent="Hey main abhi gaya hon"
// document.querySelector("div").append(h1)


// let h2=document.createElement("h1")
// h2.textContent="Hey main abhi aya hon"
// document.querySelector("div").prepend(h2)

//STYLES
// let h1=document.querySelector("h1")
// h1.style.color="red"
// h1.style.backgroundColor="orange"
// h1.style.fontFamily="Gilroy"
// h1.classList.add("change")

// TASK 01
// let heading=document.querySelector("#heading")
// heading.textContent="Welcome To Zain"

//TASK 02
// let lis=document.querySelectorAll("li")
// for(let i=0;i<lis.length;i++){
//     console.log(lis[i].textContent);
    
// }
// let p=document.querySelector("p")
// p.innerHTML="<b>Update</b> By JavaScript"
// let div=document.querySelector("div")
// div.setAttribute("title","someone show me")

// let h1=document.createElement("h1")
// console.log(h1);

let ul=document.querySelector("ul")
let li=document.createElement("li")
 li.textContent="Adding apple six 6"
ul.appendChild(li)