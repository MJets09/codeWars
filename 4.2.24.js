function disemvowel(str) {

    return str.replace(/[aeiou]/gi, "")
    //after regex expression the g is use to match all occurences in the pattern
    //i is use to perform case-insensitive searches
  }



console.log(disemvowel("AverIOUfeqftyjh"))

// What did you learn?
//Another string pattern to use regex on, using the g and i expanded on searching for exact results


// Best solution?

function disemvowel(str) {

    return str.replace(/[aeiou]/gi, "")

  }

// Thoughts? Takeaways?
//When looking for patterns in strings, use regex
