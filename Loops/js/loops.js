
 /*
Bret Porter
SDI Section #1
Loops
9-20-2015
 */

//While loop

var b = 10; //sets up the index

while (b > 0){ //checks the condition
 console.log(b + "kegs on the wall.");
 b--; //increments or decrements the index.
}

//Do While loop. Code will be ran the first time even if the 'while' is false.

var c = 10;

do{
 console.log(c + " kegs on the wall.");
 c--;
}
while(c > 0);

//For Loop

for (var i = 10; i > 0; i--){
 console.log(i + "kegs on the wall.")
}

/*example of 'break' -- if(i==100){
 break;
 } This means that once the loop gets to i==100 it will move out of the bottom of the loop
 */

/*example of 'continue'
continue moves back to the top of the loop once the 'if' is met
for(var i = 1; i < 5000; i++){
 do stuff
 do stuff
 if(i % 5 == 0){
 continue; //done with thei iteration/stops at this run of the loop and move
 back to the top.
}
*/
