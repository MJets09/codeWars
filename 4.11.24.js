// Complete the solution so that it returns true if the first argument(string) passed in ends
//  with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//Tried splice,includes

function solution(str, ending){
    if(str.endsWith(ending)){
        return true;
    }
    else{
        return false;
    }
  }

console.log(solution("abcde","abc"));

// What did you learn?
// Tried using "splice" and "includes" string methods
// Parameter splice was -1 but that only grabbed the last character. Wasnt what we needed
// includes searched the whole string but we only wanted the ending of the string. Wasnt what we needed
// Had to do googles and found a string method of endsWith which can take the parameters we needed
// and had what we needed


// Best solution?
function solution(str, ending){
    return str.endsWith(ending);
  }


// Thoughts? Takeaways?
//Had the right idea, but didnt know exactly how each string method work. Using googleFu helped solved the issue.
