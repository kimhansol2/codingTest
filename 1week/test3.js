/** 문제: 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

입력: 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. 
(-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다. */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 입력을 문자열로 변환하고 앞뒤 공백 제거 줄바꿈을 기준으로 정함
const N = parseInt(input[0]); // 첫번째 줄을 항목 개수로 받음
const lines = input.slice(1).map((line) => {
  // 두번째 줄부터 x,y 값 계산 ["5 6","1 2", "4 3"] 등 있을 경우 맵을 돌려서 띄어쓰기를 기준으로 나누고 숫자로 변환  배열 디스트럭처를 통해 [5,6] x=5 ,y=6이 됨
  const [x, y] = line.split(" ").map(Number);
  return [x, y];
});

lines.sort((a, b) => {
  if (a[0] === b[0]) {
    // 문제에서 예기한 x를 비교 [[5,6], [1,2]] 를 비교해서 x값 =5 ,1이 같은 경우 y를 비교해서 오름차순 정렬 반대 내림차순 경우 b-a
    return a[1] - b[1];
  }
  return a[0] - b[0]; // x값이 다를 경우 x를 오름차순 정렬
});

const result = lines.map(([x, y]) => `${x} ${y}`).join("\n"); //정렬된 x,y 값을 map을 통해 순회 하면서 배열값을 띄어쓰기를 통해 한줄 씩 출력
console.log(result);
