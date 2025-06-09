//filter

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let fn = num.filter((numdex) => {
    return numdex > 4
})

// or et fn = num.filter( (numdex) => numdex > 4 )
console.log(fn);

//map

const mapnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// let mn = mapnum.map( (num) => {
//     return num + 10
// } )

// console.log(mn);


//chaining of maps & filters

let mn = mapnum
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 30)
console.log(mn);


//reduce

const redu = [1, 2, 3, 4, 5]

let reducedvalues = redu.reduce((accumulator, currentvalue) => (accumulator + currentvalue), 0)
console.log(reducedvalues);


const shopping_cart = [
    {
        itemname: "js",
        price: 999
    },
    {
        itemname: "py",
        price: 1999
    },
    {
        itemname: "java",
        price: 2999
    }
]

let reduceCard = shopping_cart.reduce( (acc,item) => (acc + item.price),0)
console.log(reduceCard);
