function solution(s){
    var answer = true;
    let left = 0;
    let right = 0;
   
    for (let i=0; i<s.length; i++){
        if(i===0 && s[0] !== "("){
            answer = false;
            break;
        }
        
        if (s[i] === "("){
            left++;
        }
        else if (s[i] === ")"){
            right++;
        }
        
        if (left < right) {
            answer = false;
            break;
        }
    }
    
    if (left !== right){
        answer = false;
    }

    return answer;
}