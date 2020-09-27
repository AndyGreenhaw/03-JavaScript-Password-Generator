var ready;
var tryAgain;

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

// Generate Password Variables
var acceptPasswordFee;
var password;
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Array
var passwordVariables = [];

//..................... USER STARTS .............................

// After User Clicks "Generate Password" Button, Starts readyToStart Function 
generateBtn.addEventListener("click", readyToStart); 

// Starts readyToStart() Function
function readyToStart() {

  // Confirms whether user is ready
  ready = confirm("Ready to Create Your Random Password?");

    // User is Ready
    if (ready) {
      collectPasswordLength();

    // User is Not Ready
    } else {
      alert("Goodbye!"); 
    }

    // Console Log Status
    console.log(ready); //GOOD
    
}

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
    console.log(tryAgain); //GOOD 
}

// Starts Collecting Character Data

function collectCharacterData(){
  console.log(passwordLength); //GOOD
  
  // Collecting Character Data Variables
  lowercaseAnswer = confirm("Does your password require lowercase letters?");
  uppercaseAnswer = confirm("Does your password require uppercase letters?");
  numbersAnswer = confirm("Does your password require numbers?");
  specialAnswer = confirm ("Does your password require special characters");
    
  // Console Log Status
  console.log(lowercaseAnswer);
  console.log(numbersAnswer); // GOOD
  console.log(specialAnswer); // GOOD
  console.log(acceptPasswordFee); // GOOD
  
  //LowerCase Generator
  if (lowercaseAnswer === true){ 
    lowercaseData = possibleLowerCase.charAt((Math.floor((Math.random() * 27))));
    console.log(lowercaseData); // GOOD

    passwordVariables.push(lowercaseData)

    }
    
  //UpperCase Generator
  if (uppercaseAnswer === true) {
    uppercaseData = possibleUpperCase.charAt((Math.floor((Math.random()) * 27)));
    console.log(uppercaseData); // GOOD

    passwordVariables.push(uppercaseData)

  }
  
  //Numbers Generator
  if (numbersAnswer === true) {
    numberData = Math.floor((Math.random() * 9));
    console.log(numberData); //GOOD

    passwordVariables.push(numberData)
  }

  //Special Characters Generator
    if (specialAnswer === true) {
      specialData = possibleSpecial.charAt((Math.floor((Math.random() * 11))));
      console.log(specialData); //GOOD

      passwordVariables.push(specialData)
  }

  // Confirm Password Generation Fee
  acceptPasswordFee = confirm("Are you willing to accept the $500 password generation fee?");

    if (acceptPasswordFee){
      alert("Working on the rest of this.");
      generatePassword();
      
    } else {
      alert("Goodbye!"); 
    }
}

function generatePassword(){
  console.log(passwordLength); //GOOD
  console.log(lowercaseData); // GOOD
  console.log(uppercaseData); // GOOD
  console.log(numberData); //GOOD
  console.log(specialData); //GOOD
}



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
