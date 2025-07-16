// Ek kam jab takh complete nhi hoga tab takh dosra star nhi hoga issay kehtay hain 
// Synchronous
// kam ek sath shoro kia likin jis jis ka responsive pehlay ata gay usay hum latay hai
// issay kehtay Asynchronous js
// kaisae pata chaliga kay code sync hai ya async hai pr likaingay kisay isko
// setInterval
// setTimeout
// promises
// axios
// XMLHttpRequest
// fetch
// when we use this that means we write a async code


// then others all is sync
// Example is 
// console.log("");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// kia bar apka final code depend hota hai kisi or kay server per tu iscase main humsync code nhi likhtay bulkay
// Async likthat hain kyiun kay humain nhi pata hota hai kay answer us server sa kab ayega islie isko handle
// karnay kaylie async code likhatya hain tkay blocking na ho jab bhi answer aye tu answer kay respect main hamara
// code chal jaye
// console.log("Hey ");
// setTimeout(function(){
//     console.log("I'm Fine Bro")

// },2000)
// CallBack Functions humesha Async code main answer anay per chalta hai

// EK main stack hota hao or ek side stack hota 

// a--> sync
// b--->
// c--.async
// d---async
// Note:Executions main stack maon hoti hai
// a or b jaiyn gay main stack ain kiyun kay yeh sync js code or c or d jain daye side stack main yeh asyn hai
// jab a or b execute hojain or main stack khali hojai tu tabk side stack ko check kia jaiga or 
// inhain execute kia jaiga
// Note : Main stack or Side main jo bath cheth hoti hai wo EVENT LOOP Karati hai
// EVENT LOOP main satck se side stack ki chezain likar ata hai jiasy wo pochay ga han c complete hogaya
// agar nhi tu wo d say poch kia tera respone aya agr d boa hn to yeh main stack main issay execute karadayga
// console.log("hey1");
// console.log("hey2");
// setTimeout(function(){
//     console.log("hey3");   //balay 0 seconds hon likn yeh side stack main hai islie 3 last main print hoga
// },0)
// console.log("hey4");
// Single thread means ek bae main ek solve karaigay phir dosray pay jaiga


// CALLBACKS
// fetch
// axios
// promises
// setTimeout
// setInterval
// in say hum request bajthay hain or jab complete ho jaiye sab kuch tu inkay answers 
// ismain likhtay hain:
// Callbacks
//then catch
// async await
// callback ek aisa function ha jo async code kay completion per chalta hai


// Promises
// means wada karna  ye ek request bajay ga ya tu resolve hoga  ya tu reject hoga
// ek variabl mian store karaingay pehlay pending state main  agar resolve hoga tu .then or agr reject hoga tu .catch

// const ans=new Promise((res,rej)=>{
//     if(true){
//         return res();
//     }else{
//         return rej()
//     }
// })
// ans.then(function(){
//     console.log("resolve hogaya tha");
    
// }).catch(function(){
//     console.log("Reject hogaya tha");
    
// })

// var ans1=new Promise((res,rej)=>{
//     var n=Math.floor(Math.random()*10)
//     if(n<5){
//         return res()
//     }else{
//         return rej()
//     }
// })
// ans1.then(function(){
//     console.log("Yes resolve above ");
    
// }).catch(function(){
//     console.log("Sorry Reject below");
    
// })


// ASYNC AND AWAIT
// .then ko laganay say bachnay kaylie hum async and await lagatay hain
async function abcd() {
    let raw=await fetch('https://randomuser.me/api/')
    let ans=await raw .json()
    console.log(ans);
       
}
abcd()
// jab bhi koi code async hai tu apko uskaylie wait karna padtha hai kiyun kay humain nhi pata kay uska 
// answer kab ayga

// CONCEPT ASIDE
// Concurrancy and Parallelism
// Concurrency=>jismain asyn or sync code ek sath process horaha tha
// Parallelism=>focus ziyada karta hai diferrent process or unkay cores par kam ko chalanay par
// throtltlinh=>kisi code ko control karna uskay number of execution per
