// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

var number=function(array){

    newArr = array;
    let zeroArr = []

    if (newArr.length === 0) {
        return zeroArr
    }
    
    else{

        for(i = 0; i < array.length; i++){


            let newWord = `${i+1}: ${array[i]}`
            console.log(newWord)
    
        }

    }


}

number(["a","b","c"])

// What did you learn?
// I learned I needed to know how to first understand how to break an array apart, and while googlin I was able to find the for loop iteration.
// I was able to print out the needed index but could not find a way to combine the iterations in string literals in the amount of time given.
// I felt I was close, but still feel I had a long way to go.

// Best solution?

var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }


// Thoughts? Takeaways?
//Would've of never thought of the array map method. Future cases maybe I should first look at the available array methods then start from there.
//Todays problem was pretty tough but I have gain new insight on this pattern. No need to be dishearten, we will get better. 
