//문제 : N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

//입력 : 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
const fs = require("fs");
// Node.js에서 파일 시스템 모듈을 가져온다.
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//입력을 동기적으로 읽고 입력 버퍼를 문자열로 변환 trim을 통해 앞뒤 공백 제거 , 줄 단위로 배열 나눔
const numbers = input[1].split(" ").map(Number);
//입력 값 중 첫번 째 두번 째 즉 정수 n개의 값들을 공백 기준으로 나눠서 배열로 만듬
const min = Math.min(...numbers);
//배열 중 최소 값을 구함
const max = Math.max(...numbers);
//배열 중 최대 값을 구함
console.log(`${min} ${max}`);
