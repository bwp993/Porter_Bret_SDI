
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

 var totalRoundsSurvivable1 = playerOneHP1 / bossDamage1
//Alert user of the number of rounds they can survive.
 alert("Allow me to do some calculations.");

 alert("You will be able to survive " +totalRoundsSurvivable1+ " rounds against this boss.");
 //Alert how many rounds it will take them to defeat the boss.
 var roundsToWin1 = bossHP1 / playerOneDamage1
 alert("You will be able to defeat the boss in "+roundsToWin1+" rounds!");
 //Alert if they are victorious or not.
 if(roundsToWin1 < totalRoundsSurvivable1){
  alert("This means... \nYOU ARE VICTORIOUS!!")
 }else{
  alert("This means... \nYou are DEFEATED.")
 }

}
 //Get info about two player fight.
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

 alert("You will be able to survive " +totalRoundsSurvivable+ " rounds against this boss.");
 //Alert how many rounds it will take to defeat the boss.
 var damagePerRound = parseInt(playerOneDamage) + parseInt(playerTwoDamage);
 var roundsToWin = bossHP/damagePerRound;

 alert("You will be able to defeat the boss in "+roundsToWin+ " rounds!");

 //Alert if they will be victorious or not.
 if(roundsToWin < totalRoundsSurvivable){
  alert("This means... \nYOU WILL BE VICTORIOUS!");
 }else{
  alert("This means... \nYou will be DEFEATED.");
 }

}

 /*In order to test my calculator I went through each process. First I tried out the solo calculator.
  I said I had 900 hitpoints and did 200 damage each round and the boss had 1500 hitpoints and did
  300 damage per round. I was given that I would survive 3 rounds and would be able to defeat the boss
  in 7.5 rounds. This lead to me being defeated. In order to try out the duo calculator, I said my partner
  Tom had 500 hitpoints and did 100 damage per round, whereas, I had 500 hp and did 125 damage per round.
  The boss then had 1500 hitpoints and did 75 damage per round. This gave me the results of being
  able to survive 13.34 rounds and being able to defeat the boss in 6.67 rounds. This lead to a
  victory.*/

 
