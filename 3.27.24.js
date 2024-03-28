// Your task is to make a function that can take any non-negative integer as an argument 
// and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

let myNum = 846359;

function descendingOrder(n){
    let changedNum = String(n)
    console.log(typeof changedNum)
    //Change number into a string
    let split = changedNum.split("");
    //Use the split string method to separate string by one character with ""
    let sortS = split.sort();
    // Sort the seprated characters by values
    //    .sort could take an optional parameter, which should be a function. ex. (ES6) sort((a,b) => a-b)
    //    .sort then calls that function repeatedly, passing it a pair of values from the array (the a and b parameters).
    //     The function then returns a value which is interpreted like so:
    //     If the returned value is less than 0, then a < b
    //     If the returned value is greater than 0, then a > b
    //     If the returned value is exactly 0, then a == b
    let reverse = sortS.reverse();
    //Take sorted string and reverse the order
    let joinS = reverse.join("");
    //Use the join string method to combine the separated characters together via parameter ""
    let ans = Number(joinS);
    //Turn new string into a number
    console.log(joinS)
    //Creating multiple lines for the methods do not have to be stored in a 
    //new variable but can combine into one line
}

//What did you learn?
//How sort worked, sort works by sorting by unicode after converting to a stirng, 
//why numbers in an array are sorted based on the 1st value only(1,2,24,3,4,45,5).
//Must remember I can turn a variable to a string and use string methods.

//Best solution?

function descendingOrderBest(n){
    return Number(String(n).split('').sort().reverse().join(''))
  }

console.log(descendingOrderBest(1654387998764))

//Thoughts? Takeaways?


//Similar to what I used, combination of parseInt and String conversion needs to be tested and worked on.
//Remember your string methods, they are tools in a toolbox.



//Sorting numbers

// sort(compareFn?: ((a: never, b: never) => number) | undefined): never[]

// Function used to determine the order of the elements. It is expected to return a negative value if the first argument
// is less than the second argument, zero if they're equal, and a positive value otherwise. 
// If omitted, the elements are sorted in ascending, ASCII character order.

// [11,2,22,1].sort((a, b) => a - b)

// Sorts an array in place. This method mutates the array and returns a reference to the same array.

// The comparison function has some expectations. It expects you to return some specific values:

// -1: if the value you're comparing on the left is less than the right.
// 0: if the value you're comparing on the left is equal to the right.
// 1: if the value you're comparing on the left is greater than the right.
// In its simplest form, it means that -1 moves the item to the left (before comparing value), 
// 0 keeps it where it is, and 1 moves the item to the right (after comparing value)