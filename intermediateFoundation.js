// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num) {
    var sum=0
    for(var i=1; i<=num; i++){
        sum+=i
    }
    return sum
}

console.log(sigma(5))

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num) {
    var product= 1
    for(var i=1; i<=num; i++){
        product=product*i
    }
    return product
}

console.log(factorial(5))

// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibonacci(idx) {
    if(idx === 0){
        return 0
    }
    else if(idx === 1){
        return 1
    }
    else{
        return fibonacci(idx - 1) + fibonacci(idx - 2)
    }
}

console.log("the result is " +fibonacci(6))


// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function sTL(arr) {
    if(arr.length === 1){
        return null
    }
    return arr[arr.length - 2]
}

console.log(sTL([2,3]))

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function NthToLast(arr, num) {
    if(arr[arr.length-num] == undefined){
        return null
    }
    return arr[arr.length-num]
}

console.log(NthToLast([2,4,6,8], 6))

// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr) {
    var largest = 0
    var second = 0
    if(arr.length === 1){
        return null
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
        if(arr[i] < largest && arr[i] > second){
            second = arr[i]
        }
    }
    return second
}

console.log(secondLargest([42,1,4,3.14,7]))

// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function doubleTrouble(arr) {
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i],arr[i])
    }
    return newArr
}

console.log(doubleTrouble([4,"yoyo",42,false]))