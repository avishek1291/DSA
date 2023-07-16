function test(sampleString){
    let visited = {};
    const rightWindow = 0;
    let substring = "";
    let currentSubstring = "";
    let maxLength = 0;
    for(let leftWindow= 0; leftWindow<sampleString.length;leftWindow++){
        
        if(visited[sampleString[leftWindow]]){
            if(currentSubstring.length>substring.length){
                substring = currentSubstring;
                maxLength = currentSubstring.length;
            }
            currentSubstring = substring.replace(sampleString[leftWindow], '');
            visited[sampleString[leftWindow]] = null;
        }else{
            visited[sampleString[leftWindow]] = true;
        }
        currentSubstring = currentSubstring+sampleString[leftWindow];
    }
    console.log("", substring, maxLength)
}

test("pwwkew")
// abc
//bca
//cab
//abcb
//abcabcbb  ----> abc
//abc 
//bc+a  ---> ca+b+c