/*call1(function(){ 
    //B f c e d g wala bfcegd
    console.log("B") ; 
    call2(function() { 
        console.log("C") ; 
        call3(function() { 
            console.log("D") ; 

        }) ; 
        console .log("E") ; 
    }) ; 
    console.log("F") ; 
}) ; 
console.log("G") ; */

/***************/


async function call1(){ 
    console.log("B") ;
    await  call2() ; 
    console.log("F") ; 
};
console.log("G") ; 

/********** */
async function call2() { 
    console.log("C") ; 
     await call3() ; 
    console .log("E") ; 
} ; 

async function call3() { 
    console.log("D") ; 

} ; 
/******************************** */
/*function call1(){ 
    console.log("B")
    .then(call2())  
    .then(console.log("F")) 
    .catch((error) => console.log(error))  ; 
}
console.log("G") ; 


function call2() { 
    console.log("C") 
    .then(call3())  
    .then(console .log("E") ) 
    .catch((error) => console.log(error))  ;
} 

function call3() { 
    console.log("D") ; 

}*/




