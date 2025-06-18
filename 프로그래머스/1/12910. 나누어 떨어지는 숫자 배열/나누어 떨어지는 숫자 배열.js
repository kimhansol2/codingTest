function solution(arr, divisor) {
    let sum = [];
    let num = 0;
    let temp;
    
    for (i=0; i < arr.length; i++){
        if (arr[i] % divisor ===0 ){
            sum[num] = arr[i];
            num ++;
        }
    }
    
   for (j=0; j < sum.length; j++){
       for (i=j+1; i<sum.length; i++){
         if(sum[j]>sum[i]){
            temp = sum[j];
            sum[j] = sum[i];
            sum[i] = temp;
       }
     }
       console.log(sum);
 }
    
    if (sum.length === 0){
        sum[0] = -1;
    }
    
    
    return sum;
}