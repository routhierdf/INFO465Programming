//Daniel Routhier INFO 465 Programming Assignment 1
//Declaring variables
var readlineSync = require('readline-sync');
var numArray = [];
var cont = true //Continue variable
var input; //User input variable
var i = 0; //Array navigation variable
var arrayAvg = 0; //Calculation variable
var arrayMed; //Calculation variable

//Getting input
while(cont){
    input = readlineSync.questionInt("Enter a number for the array: ");
    numArray[i] = input;
    i++
 
    //Asking if they want to add another number
    input = readlineSync.question("Would you like to add another number? y/n: ")
    if(input == 'n' || input == 'N' ){
        cont = false;
    }
}

//Calculations
for(i = 0; i < numArray.length; i++ ){
    arrayAvg += numArray[i];
}
arrayAvg = arrayAvg / numArray.length;
i = Math.trunc(numArray.length / 2);
arrayMed = numArray[i];

//Output
console.log("The average of the array is ", arrayAvg, "\nThe median of the array is ", arrayMed);

