function AddLinkedList(listone, listtwo){
    let sum = 0;
    let sumArray =[]
    let carry = 0;
    for(let index = 0; index<listone.length; index++){
    sum = listone[index]+listtwo[index]+ carry
    sumArray[index] = sum%10;
    if(sum>=10){
        carry = sum /10;
    }
    }
    console.log(sumArray)
}
AddLinkedList([2,4, 3], [5, 6, 4]);