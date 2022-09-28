// Assignment Code
// array of numbers, letters (cap and small) and special characters
var result = "";
var charLength;
var arrayOfNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
console.log(arrayOfNumbers);

var arrayOfLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(arrayOfLowers);

var arrayOfUppers = arrayOfLowers.map(function(x){ return x.toUpperCase();})
console.log(arrayOfUppers);

var arrayOfSpecialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
console.log(arrayOfSpecialChar);

var availableCharacters = [];
// ============================================================

//Code below DOES NOT work
//=======================================
// function generatePassword() {
//   var charLength = prompt("How many characters would you like?"); 
//   console.log(charLength); //charlength = what was filled into prompt
// if (Number.isInteger(Number.parseInt(charLength)) !== true) { //charlength NaN
//   console.log(charLength);
//   charLength = prompt("Please enter a number"); //charlength = what was filled into prompt
//   charLength = Number.parseInt(charLength); //charLength is the above converted to number
//   console.log(charLength);
//   console.log(typeof charLength); //this should be a number
// } else if (Number.parseInt(charLength) < 8 || Number.parseInt(charLength) > 128) { //charlength falls out of range
//   charLength = Number.parseInt(charLength); //charLength is the above converted to number
//   console.log(charLength); //this should be a number
//   charLength = prompt("How many characters would you like - between 8 and 128 characters");
// } else if (Number.parseInt(charLength) >= 8 && Number.parseInt(charLength) <= 128) { //charlength = what was filled into prompt
//   charLength = Number.parseInt(charLength);
//   console.log(charLength);
//   console.log("great job");
//   return charLength;
// }
// // series of prompts
// // prompt 1: how long do i want password to be?
// //   min 8 max 128 characters (may need to define which characters to use)
  
// // conditional - LC, UC, num or SC

// // return 
// }

//MY ORIGINAL COE
//===========================================
// function generatePassword() {
//     var charLength = prompt("How many characters would you like?"); 
//     console.log(charLength); //charlength = what was filled into prompt
//   if (Number.isInteger(Number.parseInt(charLength)) !== true) { //charlength NaN
//     console.log(charLength);
//     charLength = prompt("Please enter a number"); //charlength = what was filled into prompt
//     charLength = Number.parseInt(charLength); //charLength is the above converted to number
//     console.log(charLength);
//     console.log(typeof charLength); //this should be a number
//   } 
  
//   if (Number.parseInt(charLength) < 8 || Number.parseInt(charLength) > 128) { //charlength falls out of range
//     charLength = Number.parseInt(charLength); //charLength is the above converted to number
//     console.log(charLength); //this should be a number
//     charLength = prompt("How many characters would you like - between 8 and 128 characters");
//   }
  
//   if (Number.parseInt(charLength) >= 8 && Number.parseInt(charLength) <= 128) { //charlength = what was filled into prompt
//     charLength = Number.parseInt(charLength);
//     console.log(charLength);
//     console.log("great job");
//     return charLength;
//   }
//   // series of prompts
//   // prompt 1: how long do i want password to be?
//   //   min 8 max 128 characters (may need to define which characters to use)
    
//   // conditional - LC, UC, num or SC
  
//   // return 
// }


// Ask BCS 2
// =================

//determine length of password
//create empty array
  //will have to populate array with a for loop (for array, x = 0, x <charLength, x++)
function generatePassword() {
  //conditionals that force user to enter a number w/in range
  var flag = true
  while(flag) {
    var input = prompt("How many characters would you like?"); 
    // console.log(input); //charlength = what was filled into prompt

    if (Number.isInteger(Number.parseInt(input)) !== true) { //charlength NaN
      window.alert('Invalid input - please enter a number');
      continue;

    } else if (Number.parseInt(input) < 8 || Number.parseInt(input) > 128) { //charlength falls out of range
      window.alert('iInvalid input - please enter a number within range (8-128)');
      continue;

    } else if (Number.parseInt(input) >= 8 && Number.parseInt(input) <= 128) { //charlength = what was filled into prompt
            
      charLength = Number.parseInt(input);
      flag = false
    }
  }
  // console.log("my " + charLength);
  //use conirms to ask if they want numbers, uppercase, LC, SP
    //store their answer
  var includeNumbers = confirm("Do you want to include numbers in your password?");
  var includeSpecials = confirm("Do you want to include special characters in your password?");
  var includeUppers = confirm("Do you want to include uppercase letters in your password?");
  var includeLowers = confirm("Do you want to include lowercase letters in your password?");
  
  if (includeNumbers) {
    availableCharacters = availableCharacters.concat(arrayOfNumbers);
  }
  console.log(availableCharacters);
  return result;
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
