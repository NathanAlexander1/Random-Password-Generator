// Assignment Code
// array of numbers, letters (cap and small) and special characters
var result = "";
var charLength;
var arrayOfNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 

var arrayOfLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var arrayOfUppers = arrayOfLowers.map(function(x){ return x.toUpperCase();})

var arrayOfSpecialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var availableCharacters = [];

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
      flag = false;
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
  
  if (includeSpecials) {
    availableCharacters = availableCharacters.concat(arrayOfSpecialChar);
  }
  
  if (includeUppers) {
    availableCharacters = availableCharacters.concat(arrayOfUppers);
  }
  
  if (includeLowers) {
    availableCharacters = availableCharacters.concat(arrayOfLowers);
  }
  // console.log(availableCharacters);

   //Edge case: All prompts are false
  if ((includeNumbers !== true) && (includeSpecials !== true) && (includeUppers !== true) && (includeLowers !== true)) {
    result = "";
    generatePassword();
    return result;
  }
  // at this point, we should have an array of concatted arrays for confirms answered yes
  //loop over available characters (for (i = 0, i < carLength, i++))
    //need to use math.floor items[Math.floor(Math.random()*items.length)] - not necessarily right
  for (var i = 0; i < charLength; i++ ) {

    result = result.concat(availableCharacters[Math.floor(Math.random()*availableCharacters.length)]); //this randomizes the array items selected
  //as we loop, add character to currently empty string result
  // console.log(result);
  }
  //only thing is that we need to make sure it gets at least one of every character type that is confirmed
  //if they didnt say yes to any prompt, they have to be directed back to start?
  
  console.log(result); //just giving me the first 15 of the array
  //need to randomize AND make sure I get at least one of each

 
  //TODO: Edge case: What if generated password does not contain characters from every true prompt

  
  
    return result;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  // var generateAgain = confirm("Would you like to generate another password?");

  // if (generateAgain) {
  //   generatePassword();
  // }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // when button is clicked
