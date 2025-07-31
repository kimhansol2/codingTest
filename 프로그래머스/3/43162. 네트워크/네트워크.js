function solution(n, computers) {
 /* n =3 컴퓨터 개수
  computers = [
    [1,1,0] //A 컴퓨터
    [1,1,0]// B 컴퓨터
    [0,0,1]// C 컴퓨터
    ];*/
  const visited = Array(n).fill(false); // 방문 여부 체크
  // 방문 여부 : [false, false, false]
  let count = 0; // 네트워크 개수 초기화

  function dfs(i) {
    visited[i] = true; // i번 컴퓨터를 방문처리

    for (let j = 0; j < n; j++) {
      // i번 컴퓨터와 j번 컴퓨터가 연결되어 있고
      // j번 컴퓨터가 아직 방문되지 않았다면
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j); // j번 컴퓨터로  재귀적으로 방문
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);   // 방문 안 했으면 탐색 시작
      count++;  // 하나의 네트워크 찾음
    }
  }

  return count;
}
