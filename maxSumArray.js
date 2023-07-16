function test(array, range){
    sum = 0;
    resultSubArray = [];
    for(let i = 0; i<(array.length-range); i++){
        let subArray = [];
        let tempSum = 0;
        for(let j = i; j<i+(range-1); j++){
            subArray.push(array[j]);
            tempSum = tempSum+array[j];
        }
        if(tempSum>sum){
            sum = tempSum;
            resultSubArray = subArray;
        }
    }
    console.log(sum, resultSubArray);
}
test([3, 5, 2, 1, 7], 3);

//[3, 5, 2, 1, 7], k=2