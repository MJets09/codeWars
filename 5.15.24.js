// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

let myArr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

function countSheeps(sheep) {

    let count = 1;
    let newCount;

    for(let i = 0; i < sheep.length; i++){
        
        if(sheep[i] === true){
            
            newCount = count++;
        }
    }
    return console.log(newCount)
  }



  countSheeps(myArr)



// What did you learn?
// Used the for loop iteration, half of the problem was solved and understood more on variable scoping can affect counts
// Couldnt figure out how to check for bad values.

// Best solution?

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

// Thoughts? Takeaways?
// Using the filter method never crossed my mind. Once again check for array methods and understand how they work
// Knowing another tool(filter) would be helpful for future cases. Must spend some time going over multiple methods