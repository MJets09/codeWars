// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

function areYouPlayingBanjo(name) {
    
    if(name[0].toLowerCase() == 'r'){
        return `${name} plays Banjo}`
    }
    else {
        return `${name} does not play Banjo`
    }
  }


console.log(areYouPlayingBanjo("Ringo"))


//What did you learn?
// Nothing too new, learn I can place the lowerCase method next to the variable name
// instead of having to create a new variable containing lowerCase changed

//Best Solution?
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }

//Takeaways?
//Learning the ?/ternary operater can make your code so much shorter. Try and get use to it