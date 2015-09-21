
 /*
Bret Porter
SDI Section #1
Functions Assignment
09-20-2015
 */

/*Create a calculator that helps the user decide what type of music to listen to
*/

//Prompt user for their name and make sure one is entered.
var name = prompt("Hello friend, can't figure out what type of music to listen to?" +
    " \nI can help with that! \nWhat's your name?");


 while(name===""){
  name = prompt("Please do not leave this area blank. \nEnter your name below.");
 }
 console.log(name);

//Ask for artists/albums/genre/songs.

 alert("Alright " +name+ ", let's start by picking three artists, songs, albums, or genres that you would like to choose from.");

 var choiceOne = prompt("Enter your first choice.");
 while(choiceOne===""){
  choiceOne = prompt("Please don't leave it blank. Type in your first selection.");
 }
 console.log(choiceOne);

 var choiceTwo = prompt("Enter your second choice.");
 while(choiceTwo===""){
  choiceTwo = prompt("Please don't leave it blank. Type in your second selection.");
 }
 console.log(choiceTwo);

 var choiceThree = prompt("Enter your third and final choice.");
 while(choiceThree===""){
  choiceThree = prompt("Please don't leave it blank. Type in your final selection.");
 }
 console.log(choiceThree);

//Create a function that will select a random number that is equal to the choice number.


function randomChoice(min, max){
 var randomNum = Math.round(Math.random() * (max-min) + min);
 return randomNum;
}

//invoke the anonymous function.

 var finalChoice =  randomChoice(1, 3);
 console.log("The random number is " +finalChoice);

//Prompt user of which choice they should listen to and see if they are okay with that choice

 if(finalChoice===1){
  var happy = prompt("You should listen to " +choiceOne+ "! Are you happy with this result? Enter yes or no.");
  console.log("You should listen to " +choiceOne);
 }else if(finalChoice===2){
  var happy = prompt("You should listen to " +choiceTwo+ "! Are you happy with this result? Enter yes or no.");
  console.log("You should listen to " + choiceTwo);
 }else if(finalChoice===3){
  var happy = prompt("You should listen to " +choiceThree+ "! Are you happy with this result? Enter yes or no.");
  console.log("You should listen to "+ choiceThree);
 }
var happy = happy.toLowerCase();

 if(happy===""){
  happy = prompt("Don't leave me hanging here " +name+ ". \nAre you happy with the selection?" +
      "Enter yes or no.");
 }
