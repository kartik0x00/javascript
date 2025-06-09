// let user={
//     username : "jemmy",
//     price : 99,
//     WelcomeMessage : function(){
//         console.log(`${this.username}, Welcome to the Website!`);
//         console.log(this);
//     }
// }

// user.WelcomeMessage()

console.log(this);

function one(){
    console.log(this); //understand this from GPT
    let username = "kartik"
    console.log(this.username);
    
    
}
one()

// const hello = () => {
//     console.log("hello");
    
// }
// hello()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,4)) //another method is 

// const addTwo = (num1,num2) => (num1 + num2) // in this , we don't have to write return keyword.
// const addTwo = (num1,num2) => ({username:"kartik"})

// console.log(addTwo(3,4))