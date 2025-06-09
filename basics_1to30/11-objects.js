//const user = new Object() // singleton object

const user = {} //non-singleton object
user.id="123abc"
user.name="kartik"
user.isLoggedIn = false

// console.log(user);


// const newUser = {
//     name : "kartik",
//     username : "k",
//     Location  : {
//         city : "BVN",
//         State: "Gujarat",
//         isLoggedIn : {
//             true : "yes",
//             false : "no"
//         }

//     }
// }

// console.log(newUser.Location);

// const obj1 = {1:"A",2:"B",}
// const obj2 = {3:"A",4:"B",}
//const obj3 = {obj1,obj2}

//const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

users = [
    {
        id : 1,
        name : "kartik",
    },
    {
        id : 2,
        name : "hello"
    },
    {
        id : 3,
        name : "hi"
    }
]
console.log(users[1].id)

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('name#'));

//_____________________________________________________

const course = {
    connecting_Name : "Js",
    cDetails : "nothing"
}
//const {cName} = course // or we can give optional variable name
const {connecting_Name : name } = course
console.log(name);
