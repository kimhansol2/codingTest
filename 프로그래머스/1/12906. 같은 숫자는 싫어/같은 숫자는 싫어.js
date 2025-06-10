function solution(arr)
{
    const answer = []
    if (arr.length === 0) return answer;
    let data = arr[0];
    answer.push(data);
    for (const item of arr){
        if(item !== data){
           answer.push(item);
            data = item;
           }
       
    }
  
    return answer;
}