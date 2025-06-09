// singleton //if we create an object through constructor and if we create an object through literals it will not singleton for example const name = new Object()
//also Object.create is constructor method it will create singleton object

//object literals
let jsUser = {  //this is object literal method
    name: "kartik",
    age : 18,
    email: "kartik@ok.in",
    location: "BVN"
}
//console.log(jsUser.email); // but this is not recommended
//console.log(jsUser["email"]);
jsUser.email = "kartik@gpt.com"
console.log(jsUser["email"]);
//Object.freeze(jsUser)
// kartik upadhyay 

// symbol
// const mySymbol = Symbol("good")

// const User = {
//     name : "kartik",
//     [mySymbol] : "hello" // use [] for symbol otherwise it will be treated as a string
// }

// console.log(User) 

jsUser.greeting = function(){
    console.log("Hello JS User!");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`);
    
}
console.log(jsUser.greetingTwo());
