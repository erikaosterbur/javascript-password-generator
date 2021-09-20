// Assignment Code
var generateBtn = document.querySelector("#generate");

// Start of function to generate password
function generatePassword() {
  var numberOfCharacters = window.prompt ("How many characters do you want in your password? (between 8-128)");
  var specialCharsAllowed = window.confirm ("Do you want special characters in your password?");
  var numbersAllowed = window.confirm ("Do you want numbers in your password?");
  var lowercaseAllowed = window.confirm ("Do you want lowercase letters in your password?");
  var uppercaseAllowed = window.confirm ("Do you want uppercase letters in your password?");

  // Creates condition for if user chooses a number outside of the set parameters
  while (numberOfCharacters <= 8 || numberOfCharacters >= 128) {
    alert ("Choose a number between 8 and 128");
      numberOfCharacters = window.prompt ("How many characters do you want in your password? (between 8-128")
  };

  // Turns string into number
  numberOfCharacters = parseInt(numberOfCharacters);

  console.log (numberOfCharacters);

  // Functions that get different characters based on user selection
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

  // Combines all characters into one string
  var characterSet = getSpecChar () + getNumbers () + getLowercase () + getUppercase ()
  
  console.log (characterSet);

  // Splits string to form new array
  var splitCharacters = characterSet.split("");

  console.log (splitCharacters);

  // Takes all characters and generates random set with user-selected number of characters
  var result = "";
  for ( var i = 0; i < numberOfCharacters; i++ ) {
    result += characterSet.charAt(Math.floor(Math.random() * 
    characterSet.length));
  }
  console.log("DATA: ",result)
 return result;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

