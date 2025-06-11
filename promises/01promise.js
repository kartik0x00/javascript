const pro = new Promise( function (resolve,reject){
    let event = true
    setTimeout(()=>{
        if (!event) {
            console.log("new promise");
            resolve()
        }
        else{
            reject("something went wrong!");
            
        }
    },1000)
})
pro.then(function(){
    console.log("consumed");
    
})
.catch(function(e){
    console.log(e , "not consumed");
    
})

fetch("https://api.github.com/users/kartik0x00")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error=>console.log(error)))