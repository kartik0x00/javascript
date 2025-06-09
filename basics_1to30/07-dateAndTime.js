let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());

console.log(typeof(myDate));

let  myCreatedDate = new Date(2024,0,19) // month starts from zero
console.log(myCreatedDate.toDateString());

let myTimeStamp  = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

myCreatedDate.toLocaleString('default',{
    weekday : "short"
})