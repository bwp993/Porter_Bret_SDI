
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

 var bowlOfFruit = ["apples","banana","pear","peach"];

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
   Make sure to use ===
  */

 if(bowlOfFruit[0]==="pear"){
  //This code will run if true
  //Add 1 to total of pears if true
  console.log("This item is a pear!");
  totalNumPears++; //totalNumPears = totalNumPears + 1
 } else{
  console.log(("This fruit is not a pear!"))
 }
