// Assignment Code
// array of numbers, letters (cap and small) and special characters

var arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; /**/
console.log(arrayOfNumbers);

var arrayOfLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(arrayOfLowers);

var arrayOfUppers = arrayOfLowers.map(function(x){ return x.toUpperCase();})
console.log(arrayOfUppers);

var arrayOfSpecialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
console.log(arrayOfSpecialChar);

function generatePassword() {
    var charLength = prompt("How many characters would you like?"); 
    console.log(charLength); //charlength = what was filled into prompt
  if (Number.isInteger(Number.parseInt(charLength)) !== true) { //charlength NaN
    console.log(charLength);
    charLength = prompt("Please enter a number"); //charlength = what was filled into prompt
    charLength = Number.parseInt(charLength); //charLength is the above converted to number
    console.log(charLength);
    console.log(typeof charLength); //this should be a number
  } else if (Number.parseInt(charLength) < 8 || Number.parseInt(charLength) > 128) { //charlength falls out of range
    charLength = Number.parseInt(charLength); //charLength is the above converted to number
    console.log(charLength); //this should be a number
    charLength = prompt("How many characters would you like - between 8 and 128 characters");
  } else if (Number.parseInt(charLength) >= 8 || Number.parseInt(charLength) <= 128) { //charlength = what was filled into prompt
    charLength = Number.parseInt(charLength);
    console.log(charLength);
    console.log("great job");
    return charLength;
  }
  // series of prompts
  // prompt 1: how long do i want password to be?
    // min 8 max 128 characters (may need to define which characters to use)
    
  // conditional - LC, UC, num or SC
  // 
  // return 
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // when button is clicked
