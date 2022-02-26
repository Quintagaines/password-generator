// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

let pwLength = ""
let password = ""

function getRandomElement(str) {
    if(password.length >= pwLength) return;

    let randomNumber = Math.floor(Math.random() * str.length)
    password += str.substring( randomNumber, randomNumber + 1)  
}

function generatePassword() {
  pwLength = prompt('How many characters should the password be? (8-24)');

  while(pwLength < 8 || pwLength > 24)
  {
    pwLength = prompt('Characters must be between 8 and 24')
  }
  let pwLowerCase = confirm('Should password include lowercase?')
  let pwUpperCase = confirm('Should password include Uppercase?')
  let specialChar = confirm('Should the password include Special Characters?')
  let numeric = confirm('Should password include numbers?')

  while(!pwLowerCase && !pwUpperCase && !specialChar && !numeric){
    alert("Must select at least one character type")
    pwLowerCase = confirm('Should password include lowercase?')
    pwUpperCase = confirm('Should password include Uppercase?')
    specialChar = confirm('Should the password include Special Characters?')
    numeric = confirm('Should password include numbers?')
  }

  let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let specialCharacter ='!@#$%^&*()'
  let numbers = '0123456789'


  while(password.length < pwLength) {
    if (pwLowerCase === true){
      if(password.length >= pwLength) break;
      getRandomElement(lowerCase)
    }
    if(pwUpperCase === true){
      if(password.length >= pwLength) break;
      getRandomElement(upperCase)
    }
    if (specialChar === true){
      if(password.length >= pwLength) break;
      getRandomElement(specialCharacter)
    }
    if (numeric === true){
      if(password.length >= pwLength) break;
      getRandomElement(numbers)
    }
  }
  
}
// Write password to the #password input
function writePassword() {
  generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  password = ""
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
