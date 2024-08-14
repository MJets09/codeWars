// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
        count = 0;

        for(let i = 0; i < x.length; i++){
            if(typeof x[i] === 'string'){
                count += parseInt(x[i])
            }
            else {
                count += x[i]
            }
        }
        return count
}

sumMix([9, 3, '7', '3'])

// What did you learn?
// Understanding and getting more comfortable in using for loop iterations. Using typeof to check what the values
// of the indexes for the arrays are and parse them into numbers if strings.

// Best solution?

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }

// Explain the solution
// We are using the map array method to create a clone of the array while adding each value together.
// Not familiar with reduce array method will need to look more into. Ran out of time today.


// Thoughts? Takeaways?
// Wasnt too bad, understanding iterating through an array became more clearer. Need to work on reduce array method
// Not fully comprehending.