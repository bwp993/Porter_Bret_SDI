
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
 //Get info about player one.

 var playerOneHP1 = prompt("How many hitpoints do you have " + nameOne+"?");
 var playerOneDamage1 = prompt("How much damage per round do you deal " + nameOne+ "?");

//Get info about the boss

 var bossHP1 = prompt("How many hit points does the next boss have?")
 if(bossHP1 === ""){
  prompt("In order to tell you how many rounds you will need to defeat the boss \nI must know how many hitpoints the boss has." +
      "\n Enter them below");
 }

 var bossDamage1 = prompt("How much damage does the boss deal each round?");

 //Calculate how many rounds players can survive per round.

 var totalRoundsSurvivable1 = totalPlayerHP / bossDamage
//Alert user of the number of rounds they can survive.
 alert("Allow me to do some calculations.");

 alert("You will be able to survive" +totalRoundsSurvivable+ " rounds against this boss.");

}
 //Get info about player two.
if(numPlayers === "Duo"){
 var nameTwo = prompt("Very well then, What is your partners name?");
 var playerTwoHP = prompt("How many hitpoints does "+nameTwo+ " have?");
 var playerTwoDamage = prompt("How much damage per round does "+nameTwo+ " deal?");
 var playerOneHP = prompt("How many hitpoints do you have " + nameOne+"?");
 var playerOneDamage = prompt("How much damage do you deal each round " + nameOne+"?");

//Get info about the boss
 var bossHP = prompt("How many hit points does the next boss have?");
 if(bossHP === ""){
  prompt("In order to tell you how many rounds you will need to defeat the boss \nI must know how many hitpoints the boss has." +
      "\n Enter them below");
 }
 var bossDamage = prompt("How much damage does the boss deal each round?");
 //Calculate how many rounds both can survive.

 var totalPlayerHP = parseInt(playerOneHP)+parseInt(playerTwoHP);
 //checking to make sure totalhp is correct.
 //alert(totalPlayerHP)

 var totalRoundsSurvivable = parseInt(totalPlayerHP)/parseInt(bossDamage);
//Alert user of the number of rounds they can survive.
 alert("Allow me to do some calculations.");

 alert("You will be able to survive" +totalRoundsSurvivable+ " rounds against this boss.");
 //Alert how many rounds it will take to defeat the boss.
 var damagePerRound = parseInt(playerOneDamage) + parseInt(playerTwoDamage);
 var roundsToWin = bossHP/damagePerRound;

 alert("You will be able to defeat the boss in "+roundsToWin+ " rounds!");

 //Alert if they will be victorious or not.
 if(roundsToWin < totalRoundsSurvivable){
  prompt("This means... \nYOU WILL BE VICTORIOUS!");
 }else{
  prompt("This means... \nYou will be DEFEATED.");
 }

}
