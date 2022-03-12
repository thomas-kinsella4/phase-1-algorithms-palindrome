

const isPalindrome = function(word) {
  // Write your algorithm here
  const wordArray = word.split("");
  const reversedArray = [...wordArray].reverse();
  const newWord1 = wordArray.join("");
  const newWord2 = reversedArray.join("");
  if (newWord1 === newWord2) {
    return (true);
  } else {
    return (false);
  }
}

/* 
  we need to create a function that reads a string and decides whether it is a palindrome, which means it is spelled the same way forwards as it is backwards
  
  Add your pseudocode here
  we need to split the word into an array of all of its letters
  then we need to reverse that array
  then we need to compare the original array to the reversed array
  then we need to return true or false depending on if the arrays match
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

//module.exports = isPalindrome;
