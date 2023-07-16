function twoSum(array, target){
    const hashRef = {};
    let result = [];
    for(let x = 0; x<array.length; x++){
        if(hashRef[target-array[x]]){
            result = [hashRef[target-array[x]], x]
            break;
        }
        hashRef[array[x]] = String(x);
    }
    console.log(result)
}
twoSum([7,2,13,11], 9)