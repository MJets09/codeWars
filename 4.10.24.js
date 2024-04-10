// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

let bmi = (weight,height) => {
    let bm = weight/height**2;

    if(bm <= 18.5){
       
        return "Underweight"
    }
    else if(bm <= 25.0){
       
        return "Normal"
    }
    else if(bm <= 30.0){

        return "Overweight"
    }
    else if(bm > 30){

        return "Obese"
    }
}


bmi(80,1.80)

// What did you learn?
// Simple if/else statement
// Instead of else if the last result, can just default it to else

// Best solution?

function bmi(weight, height) {
    var result = weight/Math.pow(height,2) 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
    
  }

// Thoughts? Takeaways?
//No troubles with if/else statements, need to be a little more clear on the last else statement