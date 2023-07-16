function binarySearch(array, target, start, end){
    //[2, 6, 10, 14, 18, 22, 26, 30, 34]
    const mid = Math.floor((start+end)/2);
    if(start>end){
        return false;
    }
    if(array[mid]=== target){
        return mid;
    }
    if(array[mid]>target){
        return binarySearch(array, target, start, mid-1)
    }else if(array[mid]<target){
        return binarySearch(array, target, mid+1, end)
    }
}
const sampleArray = [2, 6, 10, 14, 18, 22, 26, 30, 34];
console.log(binarySearch(sampleArray, 9, 0, sampleArray.length-1));