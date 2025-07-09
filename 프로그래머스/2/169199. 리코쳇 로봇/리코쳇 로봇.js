function solution(board) {
    const h = board.length; // 행 길이
    const w = board[0].length; // 열 길이 
    const visited = Array.from({length: h}, () => Array(w).fill(false)); // 행렬 모두 false로 바꿈
    const dy = [-1,1,0,0]; // 상하좌우
    const dx = [0,0,-1,1];
    
    
    let sy, sx, gy, gx; // 시작, 도착 지점을 찾기위한 변수
    
    for (let y = 0; y <h; y++) {
        for (let x= 0; x < w; x++) {
            if (board[y][x] === 'R') { //행렬에서 시작점 찾음
                sy =y;
                sx= x;
            }
            if (board[y][x] === 'G') { // 행렬에서 도착점 찾음
                gy = y;
                gx = x;
            }
        }
    }
    
    const queue = [[sy,sx,0]]; // 시작지점 좌표 및 이동횟수 초기화 
    visited[sy][sx] = true; // 시작지점 방문으로 초기화
    
    
    while (queue.length) {
        const [y,x, count] = queue.shift(); // 좌표를 꺼냄 
        
        if (y=== gy && x=== gx) return count;
        
        for (let i = 0; i < 4; i++) {
            let ny = y;
            let nx = x;
            
            while (true) {
                const ny2 = ny + dy[i];
                const nx2 = nx + dx[i];
                if (
                ny2 < 0 || ny2 >= h || 
                nx2 < 0 || nx2 >= w ||    // 벽에 부딧칠 때까지 무한 반복 
                board[ny2][nx2] === 'D'
                )break;
                
                ny = ny2; // 해당 좌표 기록
                nx = nx2; 
            }
            
            if (!visited[ny][nx]) {
                visited[ny][nx] = true;
                
                queue.push([ny, nx, count+1])
            }
        }
    }
    return -1;
}