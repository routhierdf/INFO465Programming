//Daniel Routhier INFO 465 Programming Assignment 2
//Declaring variables
var readlineSync = require('readline-sync');
var integers = [];
var input;
var i = 0; //Array navigation variable
var l = 0; //Loop control variable
var r = 0; //Result variable
var condMet = false; //Condition is met or not

//Getting input
while(input != 'q'){
    input = readlineSync.question("Enter a positive integer or 'q' to quit: ");
    if(input == "q" || input == "Q"){
        break;
    }else if(input <= 0){
        console.log("Invalid input, please try again")
        continue;
    }
    integers[i] = input;
    if(i==1)
        console.log("Remember, unique integers are more fun :)")
    i++;
};

//Echoing inputs
console.log("You entered: ");
for(i=0;i<integers.length;i++){
    console.log(integers[i]);
};

//Testing and outputting
for(l=0;l<integers.length-1;l++){ //l only goes up to 1 before the number of integers
    for(i=l+1;i<integers.length;i++){
        for(r=0;r<integers.length;r++){
            if(integers[l] * integers[i] == integers[r]){
                console.log("Condition is met: " + integers[l] + " x " + integers[i] + " = " + integers[r]);
                condMet = true;
            };
        };
    };
};
if(condMet == false){
    console.log("Condition was not met");
};