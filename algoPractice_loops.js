// Print odds 1-20

for(var i=0; i <= 20; i++){
    if(i%2 === 1){
        console.log(i)
    }
}

// Sum and Print 1-5
// Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way

var sum=0
for(var i=1; i<=5; i++){
    sum+= i;
    console.log("Num: "+i+" Sum: "+sum)
}

