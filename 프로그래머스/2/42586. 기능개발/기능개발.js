function solution(progresses, speeds) {
    var answer = [];
    let data = 0;
    let sum =0;
    for (let i=0; i< progresses.length; i++){
        progresses[i] = Math.ceil((100-progresses[i])/speeds[i]);
        
        if (i === 0){
            data =progresses[i];
            sum = 1;
        }
        
        else if (data < progresses[i] ){
            data = progresses[i];
            answer.push(sum);
            sum = 1;
        }
        else {
            sum ++;
        }
    }
    
    answer.push(sum);
    return answer;
}