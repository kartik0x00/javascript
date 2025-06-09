function multi(a,b,multi){
        c = a * b
        multi(c)
    }
    
    function display(a){
        console.log(a);
    
    }
    
    multi(10,10,display)