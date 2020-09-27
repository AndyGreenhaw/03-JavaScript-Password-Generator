//Goal
var password;
var finalPassword;

// Answers
var passwordLength;
var lowercaseAnswer;
var uppercaseAnswer;
var numbersAnswer;
var specialAnswer;

// Password Variables Containing Data
var lowercaseData;
var uppercaseData;
var numberData;
var specialData;

// Variables for Random
var lowercaseRandom;
var uppercaseRandom;
var numberRandom;
var specialRandom;

// Possible Characters
var possibleLowerCase = "abcdefghijklmnopqrstuvwxyz";
var possibleUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var possibleNumbers = "0123456789";
var possibleSpecial = "!@#$%^&*";

var randomChar;

// Miscellaneous
var ready;
var tryAgain;
var acceptPasswordFee;
var randomPosition; 

//Queries
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Arrays
var passwordVariables = [];
var allFunctions = [];
var randomFunctions = [];

//..................... USER STARTS .............................

// After User Clicks "Generate Password" Button, Starts readyToStart Function 
generateBtn.addEventListener("click", readyToStart); 

// Starts readyToStart() Function
function readyToStart() {

  // Confirms whether user is ready
  ready = confirm("Ready to Create Your Random Password?");
    if (ready) {
      collectPasswordLength();
    } else {
      alert("Goodbye!"); 
    }    
};

// Starts Collecting Password Length

function collectPasswordLength(){

  // Asks User for Password Length
    passwordLength = prompt("How many characters does your password need to be?");

    // If user entry is not a number, asks user to try again.
    if (isNaN(passwordLength)) {

      tryAgain = confirm("That's not a number. Try again?");

      if (tryAgain){
          collectPasswordLength(); 
      } else {
        alert("Goodbye!"); 
      }

    // If user clicks "Cancel," stops program.
    } else if (passwordLength === false){
      alert("Goodbye"); //Issue: Not logging when false.
  
    // If user enters a number, start collectCharacterData function.
    } else {
      collectCharacterData(passwordLength);
    }

    // Console Log Status
    console.log(passwordLength); //ISSUE: Not logging when false - Good for isNan and Number.
};

// Starts Collecting Character Data

function collectCharacterData(){
  console.log(passwordLength); //GOOD
  
  lowercaseAnswer = confirm("Does your password require lowercase letters?");
  uppercaseAnswer = confirm("Does your password require uppercase letters?");
  numbersAnswer = confirm("Does your password require numbers?");
  specialAnswer = confirm ("Does your password require special characters");
    
  // Console Log Status
  console.log(lowercaseAnswer); // GOOD
  console.log(uppercaseAnswer); // GOOD
  console.log(numbersAnswer); // GOOD
  console.log(specialAnswer); // GOOD

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

    //Random Character Generator
    if (passwordLength > 4){
      generateRandom();
    };
    
    generatePassword();
};

  // Character Generators

function generateLowerCase(){
    lowercaseData = possibleLowerCase.charAt(Math.floor(Math.random() * 26) + 1);
    console.log("ORIGINAL " + lowercaseData);
        //passwordVariables.push(lowercaseData);
  };

function generateUpperCase(){
    uppercaseData = possibleUpperCase.charAt(Math.floor(Math.random() * 26) + 1);
    console.log("ORIGINAL " + uppercaseData);
  };

function generateNumber(){
    numberData = (Math.floor(Math.random() * 9) + 1);
      console.log("ORIGINAL " + numberData);
  };

function generateSpecial(){
    specialData = possibleSpecial.charAt(Math.floor(Math.random() * 9) + 1);
    console.log("ORIGINAL " + specialData);
        //passwordVariables.push(specialData);
  };

function generateRandom() {

  if (lowercaseAnswer === true){ 
    lowercaseRandom = possibleLowerCase.charAt(Math.floor(Math.random() * 26) + 1);
    console.log("RANDOM " + lowercaseRandom);
    randomFunctions.push(lowercaseRandom);
    };
    
  if (uppercaseAnswer === true) {
    uppercaseRandom = possibleUpperCase.charAt(Math.floor(Math.random() * 26) + 1);
    console.log("RANDOM " + uppercaseRandom);
    randomFunctions.push(uppercaseRandom);
  };

  if (numbersAnswer === true) {
    numberRandom = (Math.floor(Math.random() * 9) + 1);
    console.log("RANDOM " + numberRandom);
    randomFunctions.push(numberRandom);
  };

  if (specialAnswer === true) {
    specialRandom = possibleSpecial.charAt((Math.floor(Math.random()) * 9) + 1);
    console.log("RANDOM " + specialRandom); 
    randomFunctions.push(specialRandom);
  };

  console.log("RANDOM ARRAY " + randomFunctions);
  console.log("RANDOM ARRAY " + randomFunctions.length);

  //for (var i = 0; i < (passwordLength - 4); i++){
    //randomPosition = Math.floor(Math.random() * 4);
    //allFunctions[randomPosition];
    //randomFunction = allFunctions[Math.floor(Math.random() * 4)];

  //};

};

// Generate Password Function

function generatePassword(){
  console.log("pwLENGTH: " + passwordLength); //GOOD
  console.log("lcDATA: " + lowercaseData); // GOOD
  console.log("ucDATA: " + uppercaseData); // GOOD
  console.log("nDATA: " + numberData); //GOOD
  console.log("sDATA: " + specialData); //GOOD
  console.log(passwordVariables);

  //var charSelector = Math.floor((Math.random() * 4)
  
password = passwordVariables.join("");
console.log("FINAL PASSWORD: " + password);
console.log(passwordVariables.length);

  //for (var i = 0; i < passwordVariables.length; i++) {
    //password = passwordVariables[i];
    //finalPassword;
  //}
};



      // Was fenagling with how to group these variables - plan on working with Ivan to discuss the best way to group and call objects.

      //var pw0ptions = {
        //passwordLength,
        //useLowerCase: lowercaseAnswer, 
        //useUpperCase: uppercaseAnswer,
        //useNumbers: numbersAnswer,
        //useSpecial: specialAnswer,
        //}      


// I need to figure out the above issue before I can activate this...
  //password = generatePassword();
  
  //passwordText = document.querySelector("#password");

    //if(sure=true){
    //alert("Your password is" + password);
    //} else {
    //alert("Thank you for wasting our time.");
    //}

    // Confirm Password Generation Fee
//acceptPasswordFee = confirm("Are you willing to accept the $500 password generation fee?");
//console.log(acceptPasswordFee); // GOOD

//if (acceptPasswordFee){
  //alert("Working on the rest of this.");
  //generateSpecial();
  
//} else {
  //alert("Goodbye!"); 
//}