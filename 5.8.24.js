// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples

function reverseWords(str) {

    return str.split('').reverse().join('').split(' ').reverse().join(' ')

}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))

// This one was a little trickier, I knew the reverse trick but had to learn
// how to reverse the whole sentence back to the original structured. Was stuck
// but figured out I can just reuse the methods I already used but separate by
// space this time.