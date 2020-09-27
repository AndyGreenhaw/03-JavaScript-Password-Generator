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

// Possible Characters
var possibleLowerCase = "abcdefghijklmnopqrstuvwxyz"
var possibleUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var possibleNumbers = "0123456789";
var possibleSpecial = "!@#)$%^&*(";

var randomChar;

// Miscellaneous
var ready;
var tryAgain;
var acceptPasswordFee;

//Queries
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Arrays
var passwordVariables = [];

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
      }
      
    //UpperCase Generator
    if (uppercaseAnswer === true) {
      generateUpperCase();
    }

    //Numbers Generator
    if (numbersAnswer === true) {
      generateNumber();
    }

    //Special Characters Generator
      if (specialAnswer === true) {
      generateSpecial();
    }

    generatePassword();
};

  // Character Generators

function generateLowerCase(){
    lowercaseData = possibleLowerCase.charAt((Math.floor(Math.random() * 27) + 1));
        console.log(lowercaseData); // GOOD
        passwordVariables.push(lowercaseData);
  };

function generateUpperCase(){
    uppercaseData = possibleUpperCase.charAt((Math.floor((Math.random() * 27) + 1)));
        console.log(uppercaseData); // GOOD
        passwordVariables.push(uppercaseData);
  };

function generateNumber(){
    numberData = Math.floor(Math.random() * 10) + 1;
        console.log(numberData); //GOOD
        passwordVariables.push(numberData);
  };

function generateSpecial(){
    specialData = possibleSpecial.charAt((Math.floor(Math.random() * 11) + 1));
        console.log(specialData); //GOOD
        passwordVariables.push(specialData);
  };

//WORKIGN HERECSDAOJNVCJIEVNJIENVIJLENVIJFANJILNAIJNCJIADNJCNJNWEJNCEWJCNW
//WORKIGN HERECSDAOJNVCJIEVNJIENVIJLENVIJFANJILNAIJNCJIADNJCNJNWEJNCEWJCNW
//WORKIGN HERECSDAOJNVCJIEVNJIENVIJLENVIJFANJILNAIJNCJIADNJCNJNWEJNCEWJCNW
//WORKIGN HERECSDAOJNVCJIEVNJIENVIJLENVIJFANJILNAIJNCJIADNJCNJNWEJNCEWJCNW
//WORKIGN HERECSDAOJNVCJIEVNJIENVIJLENVIJFANJILNAIJNCJIADNJCNJNWEJNCEWJCNW

var randomFunctions = {
    rFunctions : [
      generateLowerCase(),
      generateUpperCase(),
      generateNumber(),
      generateSpecial()
    ]
  };

function generateRandom(){

  for (var i = 0; i < (passwordLength - 4); i++){
    randomChar = randomFunction.rFunctions[i];
  };
};

generateRandom();
console.log("RANDOM" + randomChar);



console.log(randomChar);

//If the user's answer if greater than 4, add a new character
//Choose a random function to determine that random character


// Generate Password Function

function generatePassword(){
  console.log(passwordLength); //GOOD
  console.log(lowercaseData); // GOOD
  console.log(uppercaseData); // GOOD
  console.log(numberData); //GOOD
  console.log(specialData); //GOOD
  console.log(passwordVariables);

  //var charSelector = Math.floor((Math.random() * 4)
  
password = passwordVariables.join("");
console.log(password);

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