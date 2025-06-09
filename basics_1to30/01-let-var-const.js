const accountId = 123
let accountEmail = "kartik@ok.com" // let can be changed
var accountPass = "123" //( ' var ' not to use)
accountCity = "bvn"

//const can not be changed...

/*
Prefer Not to use var
because of issue in block scope and functional scope
*/

accountEmail = 'kartik@ok.in' // let can be changed 
console.log(accountEmail);
accountPass = 112233
console.log(accountPass);// var can (will) be changed (Not To Use) "var War karavi de"

console.table([accountId,accountEmail,accountPass,accountId]);
