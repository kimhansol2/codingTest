function solution(maps) {
  const n = maps.length; // 행의 개수 전체 맵의 세로 길이
  const m = maps[0].length; // 열의 개수 맵의 가로 길이
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
    // 방문 여부를 체크할 2차원 배열 생성
    /* ex) maps = [ [false,false,false],
                    [false,false,false],
                    [false,false,false] ]*/
  const queue = [[0, 0, 1]]; //[x,y,count] 기본 초기화
  visited[0][0] = true; //처음 위치 방문으로 변경

  const dx = [-1, 1, 0, 0]; // 상하
  const dy = [0, 0, -1, 1]; // 좌우 
   /* 좌표의 이해:
   (0,0) (0,1) (0,2)
   (1,0) (1,1) (1,2)
   (2,0) (2,1) (2,2)*/
    
  while(queue.length > 0) {
      const [x, y, count] = queue.shift();
      /* 배열 구조 분해 할당 문법으로 배열의 각 요소를 순서대로 변수에 저장 
      초기화 값 x=0, y=0, count=1 */ 
      
      if (x === n-1 && y=== m -1){
          return count;
      } // 목표 지점 도착 시 이동 횟수를 반환 
      
      for (let i=0; i <4; i++){
          const nx = x + dx[i];
          const ny = y + dy[i];
          
          if (nx >=0 && nx <n &&  // nx 값이 범위 안이고
              ny >=0 && ny< m && // ny 값이 범위 안이고
              !visited[nx][ny] && // visited 값이 false 즉 방문을 안한 곳이고
              maps[nx][ny] === 1) { // 값이 1 즉 벽이 아니면 
                  visited[nx][ny] = true; // 해당 좌표를 true로 바꾸고 
                  queue.push([nx, ny, count +1]); // 해당 값을 push하여 queue에 넣음 
              }
      }
  }  
    
    return -1 // 도착할 수 없는 경우
}