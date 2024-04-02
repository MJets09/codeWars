// Write a function, isItLetter, 
// which tells us if a given character is a letter or not.

function isItLetter(character) {
    console.log(character[0])
    return /[a-zA-Z]/.test(character);
  }

console.log(isItLetter("TheWorldIsYours"))


// What did you learn?
//Another case in using "regex"

// Best solution?

// function isItLetter(character) {
//     return (/[a-zA-Z]/).test(character);
//   }


// Thoughts? Takeaways?
//Its becoming common to use regex when looking for patters in strings
//Syntax is basically backward slash then brackets, what strings you are looking for in brackets