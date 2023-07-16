function test(arr){
    for(let i = 0; i<arr.length-1; i++){
        current_value = arr[i];
        for (let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[i]){
                let temp = arr[i]
                arr[i]= arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(test([2, 1, 3, 7, 5]))
