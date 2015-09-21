
 /*
Bret Porter
SDI Section #1
FunctionsWorksheet
09-20-2015
 */

//Calculate the circumference of a circle.

var radius = 1
var pi = 3.14
var circumference = calcCircum(pi, radius);
console.log("The circumference of the circle is " + circumference);

function calcCircum(p, r){
 return 2 * pi * radius
}


//Bee stings needed to kill an animal.

var stingsPerPound = 8.666666667
var animalWeight = 100
var stingsToKill = calcStings(stingsPerPound, animalWeight);
console.log("It will take " +stingsToKill+ " bee stings to kill the animal.")
function calcStings(s, a){
 return stingsPerPound * animalWeight
}

