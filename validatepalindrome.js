//Daniel Routhier Pipeline Build
var array = ["racecar", "hello", "Level", "I", "world", "mad am", "12321", "not a palindrome", "Taco cat"];
var word;
var reverse;

//Cleaning Array
for(var i = 0; i < array.length; i++){
    word = array[i];
    word = word.toLowerCase();
    word = word.replace(" ", ""); 
    //console.log(word);
    reverse = word.split('').reverse().join('');
    //console.log(reverse)
    if (word == reverse)
        console.log(word)
}
