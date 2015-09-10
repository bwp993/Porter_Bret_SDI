
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

