function rotate90(key) {
    const n = key.length;
    const rotated = Array.from({length: n}, () => Array(n).fill(0))
    /*
    rotated = [
     [0,0,0],
     [0,0,0],
     [0,0,0]
    ] 2차원 배열을 만들고 전부 0으로 채움  nxn */ 
    for (let i = 0; i< n; i++){
        for(let j =0; j<n; j++){
            rotated[j][n-1-i] = key[i][j]
            // 시계 방향 90도 회전 (i,j)-> (j, n-1-i)  ex) (1,0) => (0,1)
            // 반시계 방향 90도 회전 (i,j) -> (n-1-j,i) ex) (3,1) => (1,3)
       }
    }
    return rotated;
}


// 중앙 영역이 모두 1인지 확인
function check(newLock, n, m) {
    for (let i  =0; i<n; i++){
        for(let j =0; j<n; j++){
            if (newLock[m-1+i][m-1+j] !== 1) {
                return false;
            }
        }
  }
    return true;
}




function solution(key, lock) {
    const n = lock.length;
    const m = key.length;
    
    // 중앙에 원래 자물쇠 배치
    const newLock = Array.from({length: n*3}, () => Array(n*3).fill(0));
    for (let i =0; i< n; i++){
        for(let j = 0; j<n; j++){
            newLock[i+n][j+n] = lock[i][j];
        }
    }
    
    // 90도 4회전 
    for (let r = 0; r<4; r++) {
        if(r>0) key = rotate90(key);
        
        for (let x = 0; x<n*2; x++){
            for(let y = 0; y<n*2; y++){
                
                for(let i=0; i<m; i++){
                    for(let j=0; j<m; j++){
                        newLock[x+i][y+j] += key[i][j]
                    }
                }
        
        
        
        if (check(newLock, n, m)) {
            return true;
        }
        
        //복구
        for (let i =0; i<m; i++){
            for(let j =0; j <m; j++){
                newLock[x+i][y+j] -=key[i][j];
            }
         }
       }
      }
     }  
    
    return false;
}