var intMin, intMax, intGuess, intRandom, intCount; /*Variables needed*/


intMin = parseInt(prompt("Please enter a number 0 or greater for your minimum number")); /*get values from prompt*/
while(isNaN(intMin)||intMin <0)
{
    intMin = parseInt(prompt("Invalid entry. Please enter a number greater or equal to 0 for your minimum number")); /* validation */
}

intMax = parseInt(prompt("Please enter a number which is at least " + (intMin +2) + " as your maximum number"));
while(isNaN(intMax)||intMax < (intMin +2))
{
    intMax = parseInt(prompt("Sorry, you need to enter a number greater than or equal to " + (intMin +2) + " for your maximum number"));
}
intGuess = parseInt(prompt("Please enter a number between " + intMin + " and " + intMax));
while(isNaN(intGuess)||intGuess < intMin || intGuess > intMax)
{
    intGuess = parseInt(prompt("Sorry, you need to choose a number between " + intMin + " and " + intMax));
}




intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin);  /* math.random() is java function that randomizes number */
intCount = 1;
while(intGuess != intRandom)
{
    if(intGuess < intRandom)
    {
        intGuess = parseInt(prompt("Your guess of " + intGuess + " is too low, please guess again"));
        while(isNaN(intGuess)|| intGuess < intMin || intGuess > intMax) {
            intGuess = parseInt(prompt("Sorry, you need to choose a number between " + intMin + " and " + intMax));
        }
    } else
        {
        intGuess = parseInt(prompt("Your guess of " + intGuess + " is too high, please guess again"));
        while(isNaN(intGuess)|| intGuess < intMin || intGuess > intMax)
        {
            intGuess = parseInt(prompt("Sorry, you must to choose a number between " + intMin + " and " + intMax));
        }
}
intCount++;
}

alert("Congratulations! You guessed the random number of " + intRandom + " in only " + intCount + " attempts!!");