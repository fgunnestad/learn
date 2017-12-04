
function addNumbers(a,b) {
var result = a + b;
return result;
}

//Global variables for dices
var dieOne, dieTwo, dieThree, dieFour, dieFive, dieSix;

function countRolls(){
    var numberOfRolls;
    numberOfRolls++;
    return numberOfRolls;
}


function rollDice() {

    var myA = [];
    //Give dice a random value
    for (i=0; i < 6; i++) {
        myA[i] = Math.floor(Math.random() * 6) + 1;
        console.log(myA[i]);
    } 
    //Sort the dice
    myA.sort(function(a, b){return a - b});
    console.log ("SORTED AFTER THIS LINE");
   
    //Print dice value in ascending order 
    for (a=0; a < 6 ; a++){
        console.log(myA[a]);
    }

    //Count of how many dice have the same value
    var numOfOne = 0, numOfTwo= 0, numOfThree = 0, numOfFour = 0, numOfFive = 0,numOfSix = 0;
    
    for(var j=0; j<myA.length; j++){
        switch (myA[j]) {
            case 1: numOfOne++;
                    break;
            case 2: numOfTwo++;
                    break;
            case 3: numOfThree++;
                    break;
            case 4: numOfFour++;
                    break;
            case 5: numOfFive++;
                    break;
            case 6: numOfSix++;
                    break;
            default: break;
        }
    }
    //Print outcome
    console.log("Number of ones: " + numOfOne);
    console.log("Number of twos: " + numOfTwo);
    console.log("Number of threes: " + numOfThree);
    console.log("Number of fours: " + numOfFour);
    console.log("Number of fives: " + numOfFive);
    console.log("Number of sixes: " + numOfSix);

//Need to return the values of the dice and set up checks for each of the scores you can get in Yatzee
    dieOne = myA[0];
    dieTwo = myA[1];
    dieThree = myA[2];
    dieFour = myA[3];
    dieFive = myA[4];
    dieSix = myA[5];

//Increase number if dice rolls by 1
countRolls();
}


rollDice();
document.getElementById("die1").innerHTML = dieOne;
document.getElementById("die2").innerHTML = dieTwo;
document.getElementById("die3").innerHTML = dieThree;
document.getElementById("die4").innerHTML = dieFour;
document.getElementById("die5").innerHTML = dieFive;
document.getElementById("die6").innerHTML = dieSix;



