
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