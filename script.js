// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberOfCharacters = window.prompt ("How many characters do you want in your password? (8-128)");
var specialCharsAllowed = window.confirm ("Do you want special characters in your password?");
var numbersAllowed = window.confirm ("Do you want numbers in your password?");
var lowercaseAllowed = window.confirm ("Do you want lowercase letters in your password?");
var uppercaseAllowed = window.confirm ("Do you want uppercase letters in your password?");


var numberOfCharacters = parseInt(numberOfCharacters);

console.log (numberOfCharacters);

function getSpecChar () {
  if (specialCharsAllowed) {
    var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return symbols
}
};

function getNumbers () {
  if (numbersAllowed) {
    var numbers = "0123456789"
    }
  return numbers
  };

function getLowercase () {
  if (lowercaseAllowed) {
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
  }
  return lowercase
};

function getUppercase () {
  if (uppercaseAllowed) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  return uppercase
};

var characterSet = symbols.concat(numbers, lowercase, uppercase);

console.log(characterSet);

function finalPassword () {
  var password = [Math.floor(Math.random() * characterSet.length)];
};

console.log (password);









// var characterSet = function.concat(getSpecChar, getNumber, getLowercase, getUppercase);

// console.log (characterSet);



// function generatePassword(){
//   var finalPassword = characterSet[Math.floor(Math.random() * numberOfCharacters)]
//   return finalPassword;
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
