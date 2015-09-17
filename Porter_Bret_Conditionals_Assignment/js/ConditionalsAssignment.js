
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
if(numPlayers === "Duo"){
 var nameTwo = prompt("Very well then, What is your partners name?");

}

//Find out the hit points of the boss they are facing

 var bossHP = prompt("How many hit points does the next boss have?")
 if(bossHP === ""){
  prompt("In order to tell you how many rounds you will survive "+nameOne+ ",\nI must know how many hitpoints the boss has." +
      "\n Enter them below");
 }

 //Find out how much hp the user has alone.

 var onePlayerDamage = prompt("How many hitpoints do you have" + nameOne+"?");
