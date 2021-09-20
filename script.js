// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberOfCharacters = window.prompt ("How many characters do you want in your password? (8-128)");
var specialCharsAllowed = window.confirm ("Do you want special characters in your password?");
var numbersAllowed = window.confirm ("Do you want numbers in your password?");
var lowercaseAllowed = window.confirm ("Do you want lowercase letters in your password?");
var uppercaseAllowed = window.confirm ("Do you want uppercase letters in your password?");


numberOfCharacters = parseInt(numberOfCharacters);

console.log (numberOfCharacters);

function getSpecChar () {
  var symbols = "";
  if (specialCharsAllowed) {
      symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  return symbols;
}

function getNumbers () {
  var numbers = "";
  if (numbersAllowed) {
      numbers = "0123456789";
  }
  return numbers;
}

function getLowercase () {
  var lowercase = "";
    if (lowercaseAllowed) {
        lowercase ="abcdefghijklmnopqrstuvwxyz";
    }
      return lowercase;
}

function getUppercase () {
  var uppercase = "";
    if (uppercaseAllowed) {
      uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    return uppercase;
}

var characterSet = getSpecChar () + getNumbers () + getLowercase () + getUppercase ()
  
console.log (characterSet);

var splitCharacters = characterSet.split("");

console.log (splitCharacters);

function generatePassword() {
  var result = "";
  for ( var i = 0; i < numberOfCharacters; i++ ) {
    result += characterSet.charAt(Math.floor(Math.random() * 
    characterSet.length));
 }
 return result;
}

console.log(generatePassword());


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
