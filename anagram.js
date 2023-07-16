function test(input1, input2){
    const joinedstring = input1+input2;
    const ref = {};
    isAnagram = 0;
    for (x of joinedstring){
        if(ref[x]){
            ref[x]= ref[x]+1
        }else if(!ref[x]){
            ref[x] =1
        }
        if(ref[x]%2===0){
            isAnagram = isAnagram+1
        }else if(ref[x]%2!==0){
            isAnagram = isAnagram-1
        }

    }
    console.log(ref)
    return isAnagram;
}
console.log(test('listen', 'silent'))