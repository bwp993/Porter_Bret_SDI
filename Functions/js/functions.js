
 /*
Bret Porter
SDI Section #1
Functions
9-19-2015
 */

function outptMsg(){
 console.log("Hello World");
}

//Functions - Variable Scope

var width = 5;

function calcArea(){
 var width = 20;
 var height = 30;
 var area = width * height;
 //console.log(area);
}
console.log(width);
calcArea();