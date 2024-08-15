// You are going to be given a word. 
// Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{

    if(s % 1) {
        return 
    }

}


//What did you learn?
//This one was a tough one, my train of thought was to use the remainder operator
//into an if else statement then from there return the necessary character

//Best solution?

function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }