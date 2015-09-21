
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