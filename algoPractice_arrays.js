// Challenge 1: Print Values and Sum

// 1. Print each array value and the sum so far

var testArr = [6,3,5,1,2,4]
var sum = 0
for(var i=0; i<testArr.length; i++){
    sum+= testArr[i]
    console.log("Num: "+testArr[i]+" Sum: "+sum)
// }

// var testArr = [6,3,5,1,2,4]
// for(var i=0; i<testArr.length; i++){
//     testArr[i] = testArr[i] * i
// }
// console.log(testArr)


function pushToFront(arr){
    for(var i=arr.length; i>=0; i--){
        arr[i]=arr[i-1]
    }
    arr[0] = 1
    console.log(arr)
}

pushToFront([2,3,4,5])