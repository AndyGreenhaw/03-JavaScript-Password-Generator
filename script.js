//..................... VARIABLES .....................//

//Goal
var password;
var passwordOnScreen;

// Action
var ready;
var tryAgain;

// Prompt Answers
var passwordLength;
var lowercaseAnswer;
var uppercaseAnswer;
var numbersAnswer;
var specialAnswer;

// Function Data 
var lowercaseData;
var uppercaseData;
var numberData;
var specialData;

// Arrays
var passwordVariables = [];

//Queries
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Possible Characters
var possibleLowerCase = "abcdefghijklmnopqrstuvwxyz";
var possibleUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var possibleNumbers = "0123456789";
var possibleSpecial = "!@#$%^&*";

//..................... CHARACTER GENERATOR FUNCTIONS .....................//

function generateLowerCase(){
  lowercaseData = possibleLowerCase.charAt(Math.floor(Math.random() * 25) + 1);
  console.log("Lowercase Result: " + lowercaseData);
};

function generateUpperCase(){
  uppercaseData = possibleUpperCase.charAt(Math.floor(Math.random() * 25) + 1);
  console.log("Uppercase Result: " + uppercaseData);
};

function generateNumber(){
  numberData = (Math.floor(Math.random() * 9) + 1);
  console.log("Number Result: " + numberData);
};

function generateSpecial(){
  specialData = possibleSpecial.charAt(Math.floor(Math.random() * 7) + 1);
  console.log("Special Result: " + specialData);
};

//................................................//
//.....................START......................//
//................................................//

// User Clicks "Generate Password" Button to Start the first function. 
generateBtn.addEventListener("click", readyToStart); 

function readyToStart() {

  // Confirm whether user is ready
  ready = confirm("Ready to Create Your Random Password?");
    if (ready) {
      collectPasswordLength();
    } else {
      alert("Goodbye!"); 
    }    
};

// Collect Password Length
function collectPasswordLength(){

  // Ask User for Password Length
    passwordLength = prompt("How many characters does your password need to be?");

    // Ask user to try again if user entry is not a number.
    if (isNaN(passwordLength)) {
      tryAgain = confirm("That's not a number. Try again?");
        if (tryAgain){
            collectPasswordLength(); 
        } else {
          alert("Goodbye!"); 
        }

    // Ask user to try again if user enters nothing or 0.
      } else if (passwordLength == 0){
        tryAgain = confirm("You need more characters than 0. Try again?");
        if (tryAgain){
            collectPasswordLength(); 
        } else {
          alert("Goodbye!"); 
        } 

    // If user clicks "Cancel," stop program.
    } else if (passwordLength === false){
        alert("Goodbye"); 
  
    // If user enters a valid number, start collecting password character data.
    } else {
        collectCharacterData(passwordLength);
  }
};

// Collect Password Character Data

function collectCharacterData(){
  console.log(passwordLength);
  
  //Ask User What Characters They Want
  lowercaseAnswer = confirm("Does your password require lowercase letters?");
  uppercaseAnswer = confirm("Does your password require uppercase letters?");
  numbersAnswer = confirm("Does your password require numbers?");
  specialAnswer = confirm ("Does your password require special characters");

  //Go Through Each Answer and Push Desired Variables to passwordVariables Array.
  if (passwordVariables.length < passwordLength) {

  for (var i = 0; i <= passwordLength; i++){

      //LowerCase Generator
      if (lowercaseAnswer === true){ 
        generateLowerCase();
        passwordVariables.push(lowercaseData);
        };
        
      //UpperCase Generator
      if (uppercaseAnswer === true) {
        generateUpperCase();
        passwordVariables.push(uppercaseData);
      };

      //Numbers Generator
      if (numbersAnswer === true) {
        generateNumber();
        passwordVariables.push(numberData);
      };

      //Special Characters Generator
      if (specialAnswer === true) {
        generateSpecial();
        passwordVariables.push(specialData);
      };
    };
    
      // If passwordVariables Length Goes Over Desired Length, Remove Character from Beginning.
      if (passwordVariables.length > passwordLength){
          passwordVariables.shift();
        }

      // After "passwordVariables" Array Reaches Desired Length, Move On to Generate Password.
      if (passwordVariables.length = passwordLength){
          generatePassword();  
        };
  };
  console.log("VARIABLE ARRAY: " + passwordVariables);
  console.log("ARRAY LENGTH: " + passwordVariables.length);
};      

// Generate Password
function generatePassword(){

// Assembles passwordVariable Array Single Password String and Return Password to User.
  password = passwordVariables.join("");
    console.log("FINAL PASSWORD: " + password);
    console.log("PASSWORD LENGTH: " + password.length)
    console.log(passwordVariables.length);
    alert("Your new password is " + password + ". Congratulations!")
    passwordText.setAttribute("placeholder", "Your new password is " + password + " Congratulations.") 
    
};