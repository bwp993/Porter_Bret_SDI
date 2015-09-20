
 /*
Bret Porter
SDI Section #1
Functions
9-19-2015
 */

/*function outptMsg(){
 console.log("Hello World");
}*/

//Functions - Variable Scope

/*var width = 5;

function calcArea(){
 var width = 20;
 var height = 30;
 var area = width * height;
 //console.log(area);
}
console.log(width);
calcArea(); */


/*Functions - Parameters and arguments

function dogYears(age){ //parameters
 var dogYears = age * 7;
 console.log("Sparky is " + dogYears + " years old.");
}
dogYears(4); //arguments
dogYears(5);
*/

//Functions - Returning Values

/*var total =  calcArea(30, 20);

 function calcArea(w, h){
  var area = w * h;
  return area; //function spitting the info out
 }
console.log(total);
*/

//Functions - Function vs Procedure

/*This is a function
 function calcArea(width, height){
  var area = width * height;
  return area; //returns info
 }

//This is a procedure
 function calcArea(width, height){
  var area = width * height;
  console.log(area); //no return
 }
*/

//Functions - Anonymous Functions

 var calcArea = function(width, height) { //defining function
  var area = width * height;
  return area;
 }

 var a = calcArea(20, 30); //invoking
 console.log(a);
 