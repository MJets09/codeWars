// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truthy, func1 should be called, otherwise call the func2.

// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.


function _if(bool, func1, func2) {

    if(bool == true){

        return func1();
    }
    else {        
        return func2();

    }
}

_if(false)

//What did you learn?
//Was pretty simple, use the if statement with a bool parameter, if statement executes based on bool
//Remember to call functions "()" when functions are being used


//Best solution
function _if(bool, func1, func2) {
    return bool ? func1() : func2();
  }

  //With the ? operator, if return true run func2 else run func2