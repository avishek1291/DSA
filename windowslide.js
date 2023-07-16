// find the maxSum of 3 continious elements of an array
//[3, 5, 2, 1, 7]
function test(array){
    maxSum = 0;
    windowSum= 0;
    right = 0;
    for(let x =0; x<array.length; x++){
    if(right=== 3){
        right --;
        maxSum = Math.max(maxSum, windowSum);
        console.log("current Max sum", maxSum)
        windowSum = windowSum - array[x-right];
    }
   
    windowSum = windowSum + array[x];
    right++;
    }
    console.log(maxSum)
}
test([1, 3, 5, 6, 2, 7, 8])