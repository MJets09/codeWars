// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. 
// When writing on Twitter, he is known for almost always capitalizing every word. 
// For simplicity, you'll have to capitalize each word, 
// check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. T
// he strings are actual quotes from Jaden Smith, but they are not capitalized 
// in the same way he originally typed them.

let word = "the world is yours";

function cap(x){
    upp = x.split(" ")

    for (let i = 0; i < upp.length; i++) {
        console.log(upp[2])
        upp[i] = upp[i][0].toUpperCase() + upp[i].substr(1);
    }
    
    upp.join(" ");

    console.log(upp)
}


cap(word)

//What did you learn?
//Using the split method to split up the string into an array
//Then we use the for loop to iterate through the array capitilizing each
//first letter then using the join method to combine the first letter of the index
//with the substring starting from the 2nd letter to change the array into a string


//Best Solution?

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

//Need to understand this syntax more "String.prototype"