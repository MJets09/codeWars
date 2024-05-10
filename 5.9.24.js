// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time 
// since midnight in milliseconds.

function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000
  }

//What did you learn?
//Wasnt sure where to start, thought about it, and realized I didnt even know
//the conversion rate. Had to google the rate and then it made sense on how it worked.

//Best Solution?

function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }

  