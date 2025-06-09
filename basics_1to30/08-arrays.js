let myArray = [0, 1, 2, 3, 4,]
let myArray1 = ['hello', 'good morning', 'byeBye']

console.log(myArray["1"])

let newArray = new Array(1,2,3,4)
// console.log(newArray.push(5));
// console.log(newArray);

//newArray.unshift(0) // insert first but large operation(time consuming)
//newArray.shift() // delete first

// hey this 
//console.log(newArray);

//console.log(newArray.includes(4)) // if exist then its gives true
//console.log(newArray.includes(9)) // if exist then its gives false

//console.log(newArray.indexOf(1)); // gives index
//console.log(newArray.indexOf(9)); // if not exist then will gives -1 (false)

const array = myArray.join() // convert into string
//console.log(array);

console.log("Before: ", myArray);

const myArray11 = myArray.slice(1,3) // "don't manipulate original Array", give slice of Array without effacing original Array, gives Copy of an Array
console.log(myArray11);
console.log("After: ", myArray);

const myArray12 = myArray.splice(1,3) // "manipulate original Array", gives an Array with deleting elements For example: (0,3) then [0,1,2]'also count last number' but in original Array we have only remaining elements [3,4]
console.log(myArray12);
console.log("After Splice: ",myArray);
