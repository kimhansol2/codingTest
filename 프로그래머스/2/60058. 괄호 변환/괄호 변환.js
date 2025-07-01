function solution(p) {
   const a = "("; // 여는 괄호를 변수 a에 저장
   const b = ")"; // 여는 괄호를 변수 b에 저장
    
   if (p==="") return ""; // 입력이 빈 문자열이면 그대로 반환
   
    
    // 올바른 괄호인지 체크
    const isCorrect = (str) => {
        let cnt = 0; // 여는 괄호 개수와 닫는 괄호 개수를 세기 위한 카운터
        for (let ch of str) {
            ch === a? cnt++ : cnt--; // 여는 괄호면 +1 , 닫는 괄호면 -1
            if(cnt <0) return false; // 중간에 음수가 되면 올바르지 않음으로 false
        }
        return cnt === 0; //끝까지 돌았을 때 올바른 괄호 확인 
    };
    
    // 균형잡힌 괄호 문자열 u, 나머지 v로 나누는 함수 
    const split = (str) => {
        let open =0, close = 0; // 여는 닫는 괄호 개수 카운트 
        for (let i = 0; i< str.length; i++){
            str[i] === a? open++ : close++; // 여는 괄호면 open++ 닫는 괄호면 close ++ 
            
            if (open === close){ //균형잡힌 시점에서 u,v 분리해서 리턴 
                return [str.slice(0,i+1), str.slice(i+1)];
            }
        }
    };
    
    // 재귀적으로 문자열을 올바른 괄호로 변환하는 함수
    const convert = (w) => {
        if (w === "") return ""; //입력이 빈 문자열이면 그대로 반환
        const [u,v] = split(w); // 균형잡힌 u, 나머지 v로 분리
        if (isCorrect(u)) return u + convert(v); //u가 올바른 괄호면 u 그대로 + 재귀적으로 v 변환
        const inner = u
        .slice(1, -1) //u의 첫/끝 괄호 제거하고 
        .split("") //문자 배열로 변환
        .map( c=> c === a?b:a) // 괄호 반전 : '(' => ')', ')' => '('
        .join(""); // 배열을 다시 문자열로 합치기 
        return a + convert(v) + b + inner;
    };
    
    return convert(p);
    
}