
 /*
Bret Porter
SDI Section #1
Conditionals
09-16-2015
 */

var kidHeight = 44;
var minHeight = 48;
var wParentHeight = 45;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //you can ride!
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //You can ride with a parent present.
    console.log("You can ride, but only with a parent.")
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first.")
}


//Conditional Logic - Logical Operators

 var budget = 100
 var iPhonePrice = 199.99
 var wonLottery = true;

//if the price of the phone is less than our budget OR we won the lottery
 if(iPhonePrice < budget || wonLottery){
     console.log("We can buy the phone!");
 }else{
     console.log("No phone for you!");
 }
