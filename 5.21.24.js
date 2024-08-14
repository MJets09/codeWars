// This kata is about multiplying a given number by 
// eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}


simpleMultiplication(2)

// What did you learn?
// Didnt have too much trouble, key things was to figure out how to identify if parameter
// was odd or even and what to do after, used ternary operator instead of if/else statements to test self


// Best solution?

function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
  }

// Explain the solution
// Not much of difference from how I solved it.

// Thoughts? Takeaways?
// Good to get more experience on how ternary operators worked