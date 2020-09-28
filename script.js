//..................... VARIABLES .....................//

//Goal
var password;

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
  console.log("Function Result: " + lowercaseData);
};

function generateUpperCase(){
  uppercaseData = possibleUpperCase.charAt(Math.floor(Math.random() * 25) + 1);
  console.log("Function Result: " + uppercaseData);
};

function generateNumber(){
  numberData = (Math.floor(Math.random() * 9) + 1);
    console.log("Function Result: " + numberData);
};

function generateSpecial(){
  specialData = possibleSpecial.charAt(Math.floor(Math.random() * 7) + 1);
  console.log("Function Result: " + specialData);
};

//................................................//
//.....................START......................//
//................................................//

// User Clicks "Generate Password" Button: Starts readyToStart Function 
generateBtn.addEventListener("click", readyToStart); 

// Start readyToStart() Function
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

    // Asks user to try again if user entry is not a number.
    if (isNaN(passwordLength)) {

      tryAgain = confirm("That's not a number. Try again?");
        if (tryAgain){
            collectPasswordLength(); 
        } else {
          alert("Goodbye!"); 
        }

    // Asks user to try again if user enters nothing or 0.
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
  
    // If user enters a number, start collectCharacterData function.
    } else {
      collectCharacterData(passwordLength);
  }
};

// Starts Collecting Character Data

function collectCharacterData(){
  console.log(passwordLength); //GOOD
  
  lowercaseAnswer = confirm("Does your password require lowercase letters?");
  uppercaseAnswer = confirm("Does your password require uppercase letters?");
  numbersAnswer = confirm("Does your password require numbers?");
  specialAnswer = confirm ("Does your password require special characters");

  if (passwordVariables.length < passwordLength) {

  for (var i = 0; i <= passwordLength; i++){

      //LowerCase Generator
      if (lowercaseAnswer === true){ 
        generateLowerCase();
        passwordVariables.push(lowercaseData);
        console.log(lowercaseData);
        };
        
      //UpperCase Generator
      if (uppercaseAnswer === true) {
        generateUpperCase();
        passwordVariables.push(uppercaseData);
        console.log(uppercaseData);
      };

      //Numbers Generator
      if (numbersAnswer === true) {
        generateNumber();
        passwordVariables.push(numberData);
        console.log(numberData);   
      };

      //Special Characters Generator
      if (specialAnswer === true) {
        generateSpecial();
        passwordVariables.push(specialData);
        console.log(specialData);
      };

    };
    
    if (passwordVariables.length = passwordLength){
        generatePassword();  
    };
  };
      console.log("VARIABLE ARRAY: " + passwordVariables);
      console.log("ARRAY LENGTH: " + passwordVariables.length);
};
      

// Random Function Generator

//function generateRandom() {

  //if (lowercaseAnswer === true){ 
    //lowercaseRandom = possibleLowerCase.charAt(Math.floor(Math.random() * 26) + 1);
    //console.log("RANDOM: " + lowercaseRandom);
    //randomFunctions.push(lowercaseRandom);
    //};
    
  //if (uppercaseAnswer === true) {
    //uppercaseRandom = possibleUpperCase.charAt(Math.floor(Math.random() * 26) + 1);
    //console.log("RANDOM: " + uppercaseRandom);
    //randomFunctions.push(uppercaseRandom);
  //};

  //if (numbersAnswer === true) {
    //numberRandom = (Math.floor(Math.random() * 9) + 1);
    //console.log("RANDOM: " + numberRandom);
    //randomFunctions.push(numberRandom);
  //};

  //if (specialAnswer === true) {
    //specialRandom = possibleSpecial.charAt((Math.floor(Math.random()) * 9) + 1);
    //console.log("RANDOM: " + specialRandom); 
    //randomFunctions.push(specialRandom);
  //};

  //console.log("RANDOM ARRAY: " + randomFunctions);
  //console.log("RANDOM ARRAY LENGTH: " + randomFunctions.length);

  //for (var i = 0; i < randomFunctions.length; i++){
    //passwordVariables.push(randomFunctions[i]);
    //console.log("TEST " + randomChar);
  //};

  //if (passwordVariables.length < passwordLength){
    //for (var i =0; i < passwordLength; i++){
    //addonPosition = (Math.floor(Math.random() * passwordVariables.length +1));
    //addonChar = passwordVariables[Math.floor(Math.random() * 8)];
    //passwordVariables.push(addonChar);
    //};
  //}

  //generatePassword();

//};
// Complete Password Function

function generatePassword(){

  password = passwordVariables.join("");
    console.log("FINAL PASSWORD: " + password);
    console.log("LENGTH: " + password.length)
    console.log(passwordVariables.length);
    alert("Your new password is " + password + " Congratulations.")

};


      //var pw0ptions = {
        //passwordLength,
        //useLowerCase: lowercaseAnswer, 
        //useUpperCase: uppercaseAnswer,
        //useNumbers: numbersAnswer,
        //useSpecial: specialAnswer,
        //}      

  //passwordText = document.querySelector("#password");

    //if(sure=true){
    //alert("Your password is" + password);
    //} else {
    //alert("Thank you for wasting our time.");
    //}