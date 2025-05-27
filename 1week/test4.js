/** 문제 : 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 
 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, 
 aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다. 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

 입력  :첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다. 
단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다. */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]); // 단어 총 숫자
const words = input.slice(1); // ["dog", "cat", "fish"] 단어 분리용

let count = 0; // 그룹 단어 카운트 용

for (let word of words) {
  //단어 배열에서 첫번째 배열 부터 순차적으로 for문 돌림
  const seen = new Set(); // 중복 허용 x 값을 한번만 저장 이미 지나간 알파벳 저장용
  let isGroupWord = true; // 그룹 단어인지 조건문을 통한 분류를 위한 boolean

  for (let i = 0; i < word.length; i++) {
    const current = word[i]; // 하나씩 현재 단어 저장
    const prev = word[i - 1]; // 이전 단어 저장

    if (current !== prev && seen.has(current)) {
      // 이전 단어랑 같지 않고 저장된 데이터에도 있을 경우
      isGroupWord = false; // 그룹 단어 아님
      break; // 빠져나옴 다음 word부터 다시 for문 돌림
    }

    seen.add(current); // 단어를 저장함
  }
  if (isGroupWord) {
    count++; // 그룹단어가 맞으면 카운터 상승
  }
}
console.log(count); // 최종 단어 갯수 확인
