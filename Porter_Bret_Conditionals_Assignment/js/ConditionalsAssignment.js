
 /*
Bret Porter
SDI Section #1
ConditionalsAssignment
9-15-2015
 */

//alert("Testing to see if connected");
//Create a calculator to let the user know how many rounds it will take to defeat a boss.

//Prompt used for their name and make sure they enter a name.

 var nameOne = prompt("Hello Adventurer, let's see how many rounds it will take for you to defeat the next boss. \n What is your name?");
 if(nameOne === ""){
  var nameOne = prompt("Please enter your name to move forward.")
 }
//Ask if they are alone or with a partner.

 var numPlayers = prompt("If you dare fight alone enter \"Solo.\" \nIf you are lucky enough to have a partner please enter \"Duo.\"");

if(numPlayers === "Solo"){
 alert("Very brave "+nameOne+" ! You must be very strong!");
}
 //Get info about player two.
if(numPlayers === "Duo"){
 var nameTwo = prompt("Very well then, What is your partners name?");
 var playerTwoHP = prompt("How many hitpoints does "+nameTwo+ " have?");
 var playerTwoDamage = prompt("How much damage per round does "+nameTwo+ " deal?");
}

 //Get info about player one.

 var playerOneHP = prompt("How many hitpoints do you have " + nameOne+"?");
 var playerTwoDamage = prompt("How much damage per round do you deal " + nameOne+ "?");

