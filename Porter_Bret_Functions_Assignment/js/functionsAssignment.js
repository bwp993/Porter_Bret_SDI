
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

 console.log(name);

 while(name===""){
  name = prompt("Please do not leave this area blank. \nEnter your name below.");
 }

//Ask for artists/albums/genre/songs.

 alert("Alright " +name+ ", let's start by picking three artists, songs, albums, or genres that you would like to choose from.");

 var choiceOne = prompt("Enter your first choice.");
 while(choiceOne===""){
  choiceOne = prompt("Please don't leave it blank. Type in your first selection.");
 }

 var choiceTwo = prompt("Enter your second choice.");
 while(choiceTwo===""){
  choiceTwo = prompt("Please don't leave it blank. Type in your second selection.");
 }