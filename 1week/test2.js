/**문제:"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, 
X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 
예를 들어, 10번 문제의 점수는 3이 된다. "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

입력 첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 
길이가 0보다 크고 80보다 작은 문자열이 주어진다. 문자열은 O와 X만으로 이루어져 있다.*/

const fs = require("fs");
// Node.js에서 파일 시스템 모듈을 가져온다.
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 입력을 동기적으로 읽고 입력 버퍼를 문자열로 변환 trim을 통해 앞뒤 공백 제거 split을 줄 바뀜 기준으로 변경
const N = Number(input[0]); // 입력 개수 0번 배열
const lines = input.slice(1); // 첫번 째 개수 부분 제외 나머지 ox를 배열로 가져옴

for (let i = 0; i < N; i++) {
  const str = lines[i]; // 배열 즉 ['oxoxo','oxoxooo','ooooox'] 가 있으면 순서대로 str에 저장
  let score = 0; // o 갯수에 따른 점수 계산
  let sum = 0; // 점수 합산

  for (let j = 0; j < str.length; j++) {
    if (str[j] === "o") {
      // str = oxoxo 로 예시로 잡고 이 중 첫번째 부터 끝까지 하나씩 문자열을 가져옴
      // 문자도 배열처럼 인덱스로 접근 가능!
      score++; // 연속으로 O에 따른 점수 +를 계산
      sum += score; // 총 합에 대입
    } else {
      score = 0; // X가 나오면 점수 다시 초기화
    }
  }

  console.log(sum); //합산 점수 출력
}
