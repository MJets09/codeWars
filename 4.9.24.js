// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replace(/[!]/ig, "");
  }


// What did you learn?
// Getting more comfortable with regex syntax

// Best solution?
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }


// Thoughts? Takeaways?
//Getting more comfortable with regex syntax and knowing use the tool regex when looking for string patterns