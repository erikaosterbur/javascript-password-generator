// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberOfCharacters = window.prompt ("How many characters do you want in your password?");
var specialCharsAllowed = window.confirm ("Do you want special characters in your password?");
var numbersAllowed = window.confirm ("Do you want numbers in your password?");
var lowercaseAllowed = window.confirm ("Do you want lowercase letters in your password?");
var uppercaseAllowed = window.confirm ("Do you want uppercase letters in your password?");

//How many characters password will have
//Are special characters included?
//Are numbers included?
//Are lowercase letters included?
//Are uppercase letters included?

//Build final list of possible characters
//How can we build our password one letter at a time?

//For each character needed, grab a random element from the allowed list



// function askNumberOfCharacters(){

// }
var numberOfCharacters = parseInt(numberOfCharacters);

if (specialCharsAllowed){
  var specialCharsAllowed = ["!", "#", "$", "%", "&", "(", ")", "*", ",", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
}
else specialCharsAllowed = null;

if (numbersAllowed){
  var numbersAllowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
}
else numbersAllowed = null;

if (lowercaseAllowed){
  var lowercaseAllowed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
}
else lowercaseAllowed = null;

if (uppercaseAllowed) {
  var uppercaseAllowed = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}
else uppercaseAllowed = null;

var characterSet = specialCharsAllowed + numbersAllowed + lowercaseAllowed + uppercaseAllowed;

console.log (characterSet);


function generatePassword(){
  var finalpassword = getRandomValue(characterSet);
  return finalpassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
