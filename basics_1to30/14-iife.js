// Immediately Invoked Function Expression (IIFE)

// () () syntax
// why to use IIFE ?
// because of "to avoid Global scope pollution"

(function dude(){ //named IIFE
    console.log("hey, Dude");
    //console.log(this);
    
    
}) (); // we must need to end ( ; )

// or with arrow function
( (username)=>{     //simple IIFE(without name)
    console.log(`${username}, Dude with Arrow`);
    
} ) ('kartik');