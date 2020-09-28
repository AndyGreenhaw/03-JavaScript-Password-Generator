// Character Generator Functions

var allGenerators = {
    
    lowercaseData : possibleLowerCase.charAt(Math.floor(Math.random() * 26) + 1),
    uppercaseData = possibleUpperCase.charAt(Math.floor(Math.random() * 26) + 1),
    numberData = (Math.floor(Math.random() * 9) + 1)
    specialData = possibleSpecial.charAt(Math.floor(Math.random() * 9) + 1);

}


var gandalf = {
    "real name": "Gandalf",
    "age (est)": 11000,
    "race": "Maia",
    "haveRetirementPlan": true,
    "aliases": [
      "Greyhame",
      "Stormcrow",
      "Mithrandir",
      "Gandalf the Grey",
      "Gandalf the White"
    ],
    "favoriteSong": {
      "name": "The Road Goes Ever On",
      "artist": "Bilbo Baggins" 
    }
  };
    
}

//function generateLowerCase(){
    //lowercaseData = possibleLowerCase.charAt(Math.floor(Math.random() * 26) + 1);
    //console.log("ORIGINAL: " + lowercaseData);
  //};
  
  //function generateUpperCase(){
    //uppercaseData = possibleUpperCase.charAt(Math.floor(Math.random() * 26) + 1);
    //console.log("ORIGINAL: " + uppercaseData);
  //};
  
  //function generateNumber(){
    //numberData = (Math.floor(Math.random() * 9) + 1);
      //console.log("ORIGINAL: " + numberData);
  //};
  
  function generateSpecial(){
    specialData = possibleSpecial.charAt(Math.floor(Math.random() * 9) + 1);
    console.log("ORIGINAL: " + specialData);
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
      if (passwordVariables.length < passwordLength){
        generateRandom();
      
      }
  
      generatePassword();
      
      console.log("COMBINED ARRAY: " + passwordVariables);
      console.log("COMBINED LENGTH: " + passwordVariables.length);
  };
  
  // Random Function Generator
  
  function generateRandom() {
  
    if (lowercaseAnswer === true){ 
      lowercaseRandom = possibleLowerCase.charAt(Math.floor(Math.random() * 26) + 1);
      console.log("RANDOM: " + lowercaseRandom);
      randomFunctions.push(lowercaseRandom);
      };
      
    if (uppercaseAnswer === true) {
      uppercaseRandom = possibleUpperCase.charAt(Math.floor(Math.random() * 26) + 1);
      console.log("RANDOM: " + uppercaseRandom);
      randomFunctions.push(uppercaseRandom);
    };
  
    if (numbersAnswer === true) {
      numberRandom = (Math.floor(Math.random() * 9) + 1);
      console.log("RANDOM: " + numberRandom);
      randomFunctions.push(numberRandom);
    };
  
    if (specialAnswer === true) {
      specialRandom = possibleSpecial.charAt((Math.floor(Math.random()) * 9) + 1);
      console.log("RANDOM: " + specialRandom); 
      randomFunctions.push(specialRandom);
    };
  
    console.log("RANDOM ARRAY: " + randomFunctions);
    console.log("RANDOM ARRAY LENGTH: " + randomFunctions.length);
  
    for (var i = 0; i < randomFunctions.length; i++){
      passwordVariables.push(randomFunctions[i]);
      console.log("TEST " + randomChar);
    };
  
    if (passwordVariables.length < passwordLength){
      for (var i =0; i < passwordLength; i++){
      //addonPosition = (Math.floor(Math.random() * passwordVariables.length +1));
      addonChar = passwordVariables[Math.floor(Math.random() * 8)];
      passwordVariables.push(addonChar);
      };
    }
  
    generatePassword();
  
  };
  // Complete Password Function
  
  function generatePassword(){
  
    password = passwordVariables.join("");
      console.log("FINAL PASSWORD: " + password);
      console.log("LENGTH: " + password.length)
      console.log(passwordVariables.length);
      alert("Your new password is " + password + " Congratulations.")
  
  };