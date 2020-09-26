var ready;
var tryAgain;

var passwordLength;

// Character Variables
var lowercaseAnswer;
var uppercaseAnswer;
var numbersAnswer;
var specialAnswer;

// Generate Password Variables
var acceptPasswordFee;
var password;
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

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
    } else if (passwordLength == false){
      alert("Goodbye"); //Issue: Not logging when false.

  
    // If user enters a number, start collectCharacterData function.
    } else {
      collectCharacterData();

    }

    // Console Log Status
    console.log(passwordLength); //ISSUE: Not logging when false - Good for isNan and Number.
    console.log(tryAgain); //GOOD 
}

// Starts Collecting Character Data

function collectCharacterData(){

      // Collecting Character Data Variables
      lowercaseAnswer = confirm("Does your password require lowercase letters?");
      uppercaseAnswer = confirm("Does your password require uppercase letters?");
      numbersAnswer = confirm("Does your password require numbers?");
      specialAnswer = confirm ("Does your password require special characters");
      
      // Asks User If Willing to Accept Password Generation Fee
      acceptPasswordFee = confirm("Are you willing to accept a $400 password generation fee?");

      if (acceptPasswordFee){
        alert("Working on the rest of this.");
      } else {
        alert("Goodbye!"); 
      }

      // Console Log Status
      console.log(lowercaseAnswer); // GOOD
      console.log(uppercaseAnswer); // GOOD
      console.log(numbersAnswer); // GOOD
      console.log(specialAnswer); // GOOD

      console.log(acceptPasswordFee); // GOOD
}

function generatePassword(){

  password = Math.floor((Math.random() * 100) +1);

  console.log(password);
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
