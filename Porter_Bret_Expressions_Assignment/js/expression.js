
 /*
Bret Porter
SDI Section #1
Title
Date
 */

//alert("testing");

 //Ask for the users name
 var name= prompt("Let's calculate your gas mileage! \n I would like to know your name, please enter it below.");
 alert("Hello "+name+ ", Let's get started!");

 //Ask for amount of gas consumed
 var gasUsed= prompt("How many gallons of gas did you use on your last trip?");

 //Ask for amount of miles travelled
 var milesTravelled= prompt("How many miles did you travel on that trip?");

 //Calculate the user's miles per gallon
 var milesPerGallon= milesTravelled/gasUsed;
 alert("On your last trip your gas mileage was "+ milesPerGallon + " miles per gallon!");

//Let user know we will calculate remaining amount of miles they can travel and ask for amount of gas left.
 alert("Now "+name+ ", let's see how many more miles you can travel on the remaining tank of gas!");
var gasRemaining= prompt("How many gallons of gas do you still have left?");

 //Calculate the miles per gallon with the given information
 var milesLeft= milesPerGallon*gasRemaining
 alert(name+", you can still travel " +milesLeft+ " miles on this tank of gas!");

