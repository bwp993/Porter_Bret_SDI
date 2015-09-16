
 /*
Bret Porter
SDI Section #1
GoToTrainingWeek3
09-15-2015
 */

 //alert("Testing to see if connected");

 //Create and array of fruit names and then sort it.

 // Array -  variable that holds multiple variables.
 // Index # of an array always starts with 0.

 var bowlOfFruit = ["apples","banana","pear","peach","pear","banana","kiwi","pear","strawberry","pear"];

 //See whole array
 console.log(bowlOfFruit);

 //Console.log the banana
 console.log(bowlOfFruit[1]);

 /*How many items are in the array?
 length property - access this by using dot syntax
 fancy term for using a period*/
 console.log(bowlOfFruit.length);

 /*Count the number of pears in our fruit bowl
 Create a variable that will keep track of how many pears
 there are in the bowl
  */
var totalNumPears = 0

 //Test each item in the array and check if it is a pear

 //Basic structure of a conditional
 // if(condition to test){code that will run if true}
 /*"7" == 7
   "7" ===7
   Prompts always return strings!!
   Make sure to use === this means strictly equal
  */

 if(bowlOfFruit[0]==="pear"){
  //This code will run if true
  //Add 1 to total of pears if true
  console.log("This item is a pear!");
  totalNumPears++; //totalNumPears = totalNumPears + 1
 } else{
  console.log(("This fruit is not a pear!"))
 }

 if(bowlOfFruit[1]==="pear"){
  //This code will run if true
  //Add 1 to total of pears if true
  console.log("This item is a pear!");
  totalNumPears++; //totalNumPears = totalNumPears + 1
 } else{
  console.log(("This fruit is not a pear!"))
 }

 if(bowlOfFruit[2]==="pear"){
  //This code will run if true
  //Add 1 to total of pears if true
  console.log("This item is a pear!");
  totalNumPears++; //totalNumPears = totalNumPears + 1
 } else{
  console.log(("This fruit is not a pear!"))
 }

 if(bowlOfFruit[3]==="pear"){
  //This code will run if true
  //Add 1 to total of pears if true
  console.log("This item is a pear!");
  totalNumPears++; //totalNumPears = totalNumPears + 1
 } else{
  console.log(("This fruit is not a pear!"))
 }

 console.log("There is(are) "+totalNumPears+" pear(s) in the fruit bowl");

 //Create another variable to track pears
 var pearNumber = 0

 //Create a loop for repetitive code.


//For Loop Structure
 //for(initializing a counting variable; condition to test;
 // increment of change){code to run for each time we loop}

 for(var i =0; i<bowlOfFruit.length; i++){
  console.log("Inside the loop, i ="+i);
  console.log(bowlOfFruit[i]);
  //Test if the array item is a pear
  if(bowlOfFruit[i]==="pear"){
   console.log("Found a pear!");
   pearNumber++;
  }else{
   console.log("Fruit is not a pear");
  }
 }

 console.log("The total number of pears in the bowl is "+pearNumber);

 //Validate prompts

 var name = prompt("What is your name?");

 //Test to see if the variable is blank
 if(name === ""){
  //The user left if blank
  //reprompt the user using the SAME variable
  name = prompt("Please do not leave blank. \nWhat is your name?");
 }

 var num1 = prompt("Please type in a number.");

 //Test to see if it is a number
 //isNaN(item to test) - stands for is not a number
 console.log(isNaN("cat")); //true
 console.log((isNaN(7))); //false

 if(isNaN(num1)){
  //Reprompt the user
  num1 = prompt("Please only use numbers. \n Type in a number.");
 }


