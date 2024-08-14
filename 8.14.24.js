// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a,
// four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the printer
// as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.


function printerError(s) {

    let count = 0;

    stringLength = s.length;
    checkString = /^[a-mA-m]+$/

    let splitString = s.split("")
    
    for(let i = 0; i < splitString.length; i++){

        if(checkString.test(splitString[i])){
            console.log("true")
        }
        else {
            count++
        }
    }

    console.log(`'${count}/${stringLength}'`)
    return `${count}/${stringLength}`

}

// What did you learn?
//Using a combination of regex and for loop to break my string into an array and looping through each iteration to check if the letter is a-m
//then adding to the count intialization, also to include the intialization inside of the function everytime the function is called

//Best solution?

function printerError(s) {
    
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}