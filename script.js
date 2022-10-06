// Add Assignment code here
var length;
function generatePassword() {

var lowChar = ["abcdefghijklmnopqrstuvwxyz"];
var uppChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numChar = ["1234567890"];
var specChar = ["!@#$%^&*()"];
var passwordChar = [""];


var lengthUser = window.prompt("How many characters long would you like your new password to be? MUST be between 8 & 128:")
if (lengthUser < 8 || lengthUser > 128 || isNaN(lengthUser)){
    alert("Invalid response. Please restart and enter a number between 8 and 128.");
    return generatePassword();
   
  } 

  else length = parseInt(lengthUser);
  
  var lowCharResponce = confirm("Would you like to use lowercase letters in this password (recommended)? Click OK for YES"
    );
    

  var uppCharResponce = confirm(
      "Would you like to include Uppercase letters in your password (recommended)? Click OK for yes "
     );
     

  var numCharResponce = confirm(
      "Would you like to include numbers in your password (recommended)? Click OK for yes "
    );
    

  var specCharResponce = confirm(
      "Would you like to include special characters in your password (recommended)? Click OK for yes "
    );
    
 
  if (lowCharResponce) passwordChar += lowChar;
  if (uppCharResponce) passwordChar += uppChar;
  if (numCharResponce) passwordChar += numChar;
  if (specCharResponce) passwordChar += specChar;

  console.log(passwordChar);

    
    if (lowCharResponce + uppCharResponce + numCharResponce + specCharResponce === 0) {
      alert ("MUST choose at least 1 type of character. Please restart!");
      return generatePassword();
    }

    return passwordChar;
    
  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var finalPassword = "";
  console.log(password);



for (var i = 1; i <= length; i++) {

      var randomNumber = Math.floor(Math.random() * password.length);
      finalPassword += password.substring(randomNumber, randomNumber + 1);
 
    }

  
    document.getElementById("password").value = finalPassword;
  
    passwordText.value = finalPassword;
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/**/
