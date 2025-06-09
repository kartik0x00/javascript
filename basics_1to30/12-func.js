// function addNum (num1, num2) {
//     let result = num1 + num2 // or return num1 + num2
//     return result
// }

// const result = addNum(3,4)
// console.log("Result : ",result)

// function loginUserMessage (username) {
//     if(!username){
//         return `pls enter name!`
//     }
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage(""));

function calculateCartPrice(va1, va2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,5000));

let user = {
    username : "kartik",
    price : 3400
}

function handleObj (anyobj) { //here we have to enter anyobj [dot] keys
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
    
}
//handleObj(user) or we can change values like this
// handleObj({
//     username : 'sam',
//     price:34
// })
let newArray = [200,400,500,600]
function returnSecondValue(getArray){
    return getArray
}
console.log(returnSecondValue(newArray))
