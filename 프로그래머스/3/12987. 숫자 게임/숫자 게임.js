function solution(A, B) {
  A.sort((a, b) => b - a);  // 내림차순 정렬
  B.sort((a, b) => b - a);

  let bi = 0;      // B를 가리키는 인덱스 (강한 쪽부터)
  let score = 0;

  // A팀의 수를 하나씩 확인하면서
  for (let ai = 0; ai < A.length; ai++) {
    if (A[ai] < B[bi]) {
      score++;  // B가 이길 수 있으면 점수 획득
      bi++;     // B도 다음 강한 숫자로 옮김
    }
    // B가 이길 수 없으면, B는 패배용 약한 숫자는 안 써도 됨
  }

  return score;
}