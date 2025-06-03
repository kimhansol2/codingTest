function solution(brown, yellow) {
 
    const total = brown + yellow;
    
    let left = Math.floor(Math.sqrt(total));
      
    let right = total/left
    
    if ((right - 2) * (left - 2) === yellow) {
    return [right, left];
    }
    
    for (let i = left+1; i <total; i++){
        if(total%i !== 0) continue;
        right = total/i;
        left = i;
        if ((right-2)* (left-2) === yellow) {
           return [left, right]
        }
      }
    
    
}