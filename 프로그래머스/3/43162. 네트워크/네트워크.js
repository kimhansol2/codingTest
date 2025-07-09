function solution(n, computers) {
  const visited = Array(n).fill(false); // 방문 여부 체크
  let count = 0; // 네트워크 개수

  function dfs(i) {
    visited[i] = true;

    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j); // 연결된 컴퓨터는 재귀적으로 방문
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