// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong?
 
// Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).

// Hint: You might want to look up Javascripts Math.random() function!

// Second, create a function playFives(num), which should call rollOne() multiple times – ‘num' times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”

// Third, create a new function named playStatistics(), which should call rollOne() eight times (but not print anything after each call). After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne, among those eight calls.


function rollOne() {
    return (Math.trunc(Math.random()*6)+1)
}


// function playFives(num) {
//     for(var i = 1; i<=num; i++){
//         var dice= rollOne()
//         if(dice === 5){
//             console.log(dice+" That's good luck")
//         }
//         else{
//             console.log(dice)
//         }
//     }
// }

// playFives(5)

function playStatistics() {
    var min = 0;
    var max = 0;
    var num;
    for(var i = 1; i<=8; i++){
        num = rollOne()
        if(num < min || min === 0){
            min = num
        }
        if(num > max || max === 0){
            max = num
        }
    }
    console.log("minimum number is "+ min +" Max number is "+ max)
}

playStatistics()





// On New Year’s Eve, have fun but don’t forget your way home! For this challenge create four functions (reset, moveBy, xLocation and yLocation) to track the travels of Claire, a wanderer. Calling reset() moves Claire home to the origin (0,0). The moveBy(xOffset,yOffset) function moves her by those amounts, in those directions. Finally,

// xLocation() and yLocation()return how far Claire is from home, in X and Y directions respectively. After the calls of reset(), moveBy(1,-2), and moveBy(3,1), subsequently calling xLocation() and yLocation() should return 4 and -1.

var x=0
var y=0
function reset() {
    x=0;
    y=0
    return ("x is "+x+" y is "+y)
}

function moveBy(x,y) {
    function xLocation(x) {
        var xOffset=
    }
    return ("x is now "+x+" y is now "+y)
}


