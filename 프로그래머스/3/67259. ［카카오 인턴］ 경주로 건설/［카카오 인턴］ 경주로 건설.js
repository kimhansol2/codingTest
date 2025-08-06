function solution(board) {
    const n = board.length; //보드 크기
    const cost = Array.from({length:n},() => Array.from({length:n}, () => Array(4).fill(Infinity)));
    // cost[y][x][dir] => y,x 좌표에 dir 방향으로 도착했을 때의 최소 비용 저장
    // dir은 0:위 , 1: 아래 , 2:왼쪽, 3:오른쪽
    
    const dy = [-1,1,0,0]
    const dx = [0,0,-1,1]
    
    
    const queue = []; // bfs를 위한 큐
    
    
    cost[0][0][1] = 0; // 아래
    cost[0][0][3] = 0; // 오른쪽
    
    // 시작점에서 왼쪽, 위는 막혀 있음 
    
    queue.push([0,0,1,0]); // 아래
    queue.push([0,0,3,0]); // 오른쪽
    // bfs 시작점에 (y =0, x=0, dir, cost  형식으로 넣음 )
    
    
    while (queue.length) { 
        
        const [y,x, dir, c] = queue.shift(); // 큐에서 하나 꺼내옴
        
        for (let ndir =0; ndir < 4; ndir++) {
            const ny= y+dy[ndir]; // 4방향 탐색 
            const nx= x+dx[ndir];
            
            if (ny<0 || nx <0 || ny >=n || nx >=n) continue; // 범위를 벗어나거나 
            if(board[ny][nx] ===1 ) continue;// 벽인 경우 스킵
            
            let nc = c+ 100; // 기본 비용
            if(dir !== ndir) nc += 500; // 직전 방향과 현재 이동 방향이 다르면 코너 추가 비용 
            
            
            if (cost[ny][nx][ndir] > nc) { // (ny,nx, ndir)로 가는 비용이 이전에 저장된 비용보다 작을 경우 갱신
                cost[ny][nx][ndir] = nc;
                queue.push([ny,nx,ndir, nc]); // 갱신한 경우에만 큐에 넣어서 다음 BFS 탐색 진행 
            }
        }
    }
    return Math.min(...cost[n-1][n-1]) // 도착점에 방향별 비용 중 최소값을 반환 
}