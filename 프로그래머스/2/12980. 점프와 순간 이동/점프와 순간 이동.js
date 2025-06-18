function solution(n)
{
    
    let data = 0;
    let sum = 1;
    
    while (n > 1){
        data = n % 2;
        n = Math.floor(n/2);
        sum += data;
       
    }
    
    return sum;
}