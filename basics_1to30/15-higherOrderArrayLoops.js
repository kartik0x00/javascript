// FOR OF

arr = [1,2,3,4]

for (const i of arr) {
    console.log(i);
    
}

const map = new Map()

map.set('IN',"india")
map.set("FR","france")
map.set("USA", "united states of america")

console.log(map);


for (const element of map) {
    console.log(element);
    
}

for (const [key, value] of map) {
    console.log(`${key} is ${value}`);
    
}

//FOR IN

const myobj = {
    js:"javas",
    java:"java",
    py:"python"
}

for (const key in myobj) {
    console.log(key +" and "+ myobj[key]);
    //console.log(key)
    
}


//forEACh

const coding = ["js", "python", "java"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

coding.forEach( (info,index,arr)=>{
    console.log(info,index,arr);
    
} )