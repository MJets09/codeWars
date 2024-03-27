// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s){
    //coding and coding....
    
    newString = s.replaceAll('a',"!").replaceAll('e',"!").replaceAll('i',"!").replaceAll('o',"!").replaceAll('u',"!").replaceAll('A',"!").replaceAll('E',"!").replaceAll('I',"!").replaceAll('O',"!").replaceAll('U',"!")
    return newString;
  }


console.log(replace("AEIPOU"))


// What did you learn?
// Used the replacedAll string method to replace the letter needed to exclaimation point.
// I feel it might be way to slow to use that method has there were too many
// replaceAll methods.

// Best solution?

function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}

// Thoughts? Takeaways?
// Looks like they used regex, tried to not used regex, maybe one of those
// exceptions. Learn to use regex. 

// i	Perform case-insensitive matching	
// g	Perform a global match (find all)	
// m	Perform multiline matching	
// d	Perform start and end matching (New in ES2022)
// [abc]	Find any of the characters between the brackets	
// [0-9]	Find any of the digits between the brackets	
// (x|y)	Find any of the alternatives separated with |
// \d	Find a digit	
// \s	Find a whitespace character	
// \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
// \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx


function testingRegEx(x){

    return x.replace(/5/ig, "Five")
}


console.log(testingRegEx("321510659887743512355"));