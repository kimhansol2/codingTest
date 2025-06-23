function solution(nums) {
    let count = 0;
  let sum = 0;
    
   function comparison(sum){
       if(sum < 2) return false;
       
       for (let i=2; i<=Math.sqrt(sum); i++){
           if(sum %i === 0){
               return false
           }
       }
       return true;
   }
    
    for (let i=0; i<nums.length; i++){
        for (let j=1+i; j<nums.length; j++ ){
            for (let k=1+j; k < nums.length; k++){
                sum = nums[i]+nums[j]+nums[k];
                
                if (comparison(sum)){
                    count++;
                }
            }
        }
    }
        
        return count;
}