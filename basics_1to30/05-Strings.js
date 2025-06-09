const name = "don"
const repocount = 4
// console.log(name + repocount + "Value") do not use this pls!!!

console.log(`Hello my name is ${name} and my repocount is ${repocount}`)

const heygame = new String('kar tik upadh yay')
console.log(heygame.__proto__);

console.log(heygame.toUpperCase());
console.log(heygame.charAt(4));
console.log(heygame.indexOf('k'));

const newstring = heygame.substring(0,4) // we cant give negative values
console.log(newstring);
const anotherstring = heygame.slice(-13,6)// we can give negative values
console.log(anotherstring);

const newstringone = "   kartik    "
console.log(newstringone.trim())

const url = "http://kartik.onion/kartik%20upadhyay"
console.log(url.replace('%20','-'))
console.log(url.includes('onion'));


console.log(heygame.split(' '));

