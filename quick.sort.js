function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }else{
        let left = []
        let right = []
        let newArray = [];
        const pivot = arr.pop();
        for(let i =0; i<arr.length; i++){
            if(arr[i]<=pivot){
                left.push(arr[i])
            }
            else{
                right.push(arr[i])
            }
        }
        return newArray.concat(quickSort(left), pivot, quickSort(right))
    }

}
console.log(quickSort([2, 1, 3, 7, 5]))

