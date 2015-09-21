
 /*
Bret Porter
SDI Section #1
GoToTrainingWeek4
9-20-2015
 */

/*Create a file that will give us a random number
  between two numbers
*/

 //Ask user for the minimum number

 var minNum = prompt("Let's find a number between two numbers! \nWhat is" +
     " the minimum number?");

 console.log(minNum);
 //validate the prompt isn't blank and that it is a number
 while(minNum === "" || isNaN(minNum)){ //Says is variable blank or is it not a number?
  //reprompt the user
  if(minNum===""){
   minNum = prompt("Please don't leave blank. \nWhat is the minimum number?");
  } else if(isNaN(minNum)){
   minNum = prompt("Please only use numbers. \nWhat is the minimum number?");

  }
 }


 /*
 Basic structure of a while loop

 //Declare a variable
 var x = prompt("type in a number");

 while(x < 6){ //in parenthesis is the condition to test.
 //some sort of change to the variable in order to prevent infinite loop.
 x++ //keeps adding 1 until the condition is false.
 }
  */

 //Prompt user for max number
 var maxNum = prompt("What is the maximum number?");

 //Validate directly after the prompt.
 while(maxNum==="" || isNaN(maxNum)){
  if(maxNum === ""){
   maxNum = prompt("Please don't leave blank. \nWhat is the max number?");
  }else if(isNaN(maxNum)){
   maxNum = prompt("Please only use numbers. \nWhat is the max number?");
  }
 }

 //What if you want to validate words?
 //Ask a yes or no question
 var happy = prompt("Are you happy today?");
 //convert to all lowercase
 happy = happy.toLowerCase();

 while(happy != "yes" && happy != "no" && happy != "maybe"){
  happy = prompt("Please only use yes, maybe or no. \nAre you happy today?");
 }

 //Function call.
 //Arguments go inside the function call.
 //Create a variable to catch the returning value.
var returnedValue = randomizr(minNum, maxNum);

console.log("Your random number between " +minNum+ " and " +maxNum+ " is " +returnedValue)
 //Create a function to calculate the random number.
 /*Parameters go inside (). temporary variables that can only be accessed
 inside the function. They catch the arguments that are thrown in. Makes the code
 more flexable. DO NOT want to use main code variables!
  */

 function randomizr(min, max){

  //generate our random number
  var randomNumber =Math.round( Math.random()*(max-min)+Number(min));
  //console.log(randomNumber);

  //return the value to our main code
  return randomNumber;

 }

//Wanted 15 random numbers. Make a for loop
 for(var i=0; i<15; i++){

  //15 different results
  console.log(randomizr(minNum, maxNum));
 }


//Anonymous functions - Browser can't see this funct until it gets to it.

//Create and anon function that adds 2 numbers together
 // var functionName = function(){};

 var addNums = function(num1, num2){
  var total = num1+num2;
  return total;
 };

 //function needs to be called; addNums needs to be called after function.

 var totalReturned = addNums(5, 6);
 console.log(totalReturned+ " is the added total.");
