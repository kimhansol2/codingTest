function solution(numbers) {
    const result = new Set();
    
    for (i=0; i<numbers.length;i++){
        for(j=i+1; j<numbers.length;j++){
            result.add(numbers[i]+numbers[j]);
        }
    }
    
    return [...result].sort((a,b) => a-b); 
}