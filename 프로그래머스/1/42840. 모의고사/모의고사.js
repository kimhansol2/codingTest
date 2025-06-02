function solution(answers) {
   let score1 = 0;
   let score2 = 0;
   let score3 = 0;
    
   let student1 = [1,2,3,4,5];
   let student2 = [2,1,2,3,2,4,2,5]
   let student3 = [3,3,1,1,2,2,4,4,5,5]
   
 
    for (i = 0; i <answers.length ; i ++){
        if(answers[i] === student1[i%student1.length]) score1++;
        if(answers[i] === student2[i%student2.length]) score2++;
        if(answers[i] === student3[i%student3.length]) score3++;  
    }
    const maxScore = Math.max(score1,score2,score3);
    
    const result = [];
    
    if (score1 === maxScore) result.push(1);
    if (score2 === maxScore) result.push(2); 
    if (score3 === maxScore) result.push(3);
    
    return result;
}