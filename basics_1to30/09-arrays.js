let marvelHeros = ["IronMan", "Thor", "CaptainAmerica", "BlackPanther"]
let dcHeros = ["SuperMan", "BatMan", "Flash"]

//console.log(marvelHeros.push(dcHeros)) // it will give length of Array "IronMan" is at index 0."Thor" is at index 1."CaptainAmerica" is at index 2."BlackPanther" is at index 3.The entire ["SuperMan", "BatMan", "Flash"] array is at index 4.
//The length of marvelHeros is now 5.
//console.log(marvelHeros);

//console.log(marvelHeros[4][1]); // if we want to find particular element (but this is not recommended) explain: [4] is whole dcHeros and in dcHeros [1] is BatMan.

let allHeros = marvelHeros.concat(dcHeros) //combines two or more Arrays and return "NEW Array"
console.log(allHeros);


allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros);

let anotherArray = [1, 2, 3, 4, [5, 6], 7, 8, [9, 10, 11],12]
//console.log(anotherArray);

let realArray = anotherArray.flat(Infinity) //  gives flat Array and in .flat('here we have to give depth of Array that we want to flat , infinity will automatically give you')
//console.log(realArray);

console.log(Array.isArray("kartik"));
console.log(Array.from("kartik"));
console.log(Array.from({name: "kartik"})); //it will give Empty Array [], can't convert because of object if we want to convert then we have to specify

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
