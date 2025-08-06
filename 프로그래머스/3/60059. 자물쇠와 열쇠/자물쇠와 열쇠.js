function solution(key, lock) {
    const keyLen = key.length; // 열쇠의 크기
    const lockLen = lock.length; // 자물쇠의 크기

    const mapLen = (keyLen)*2 + lockLen-2; // key 맵 확장
    // 열 쇠를 자물쇠 바깥까지 이동할 수 있도록 여유 공간 포함
    const mapGen = len => Array(len).fill(0).map(_=>Array(len).fill(0)); //len x len 배열을 만들고 모든 값 0
    const maps = mapGen(mapLen); // 확장된 빈 맴

    // insert lock
    for(let i=0;i<lockLen;i++){ // 좌물쇠 중앙 배치 
        for(let j=0;j<lockLen;j++){
            const offset = keyLen - 1;
            maps[offset+i][offset+j] = lock[i][j];
        }
    }

    // only rectangle
    // not clone
    function rotate(arr) { // 2차원 배열 제자리 시계 방향 회전
        const arrLen = arr.length;
        const arrLenHalf = Math.ceil(arrLen / 2); // 배열 절반만 순회하면 회전 완료 (한 변에 4개의 위치를 바꾸기 때문에 절반만 돌면 됨)

        for (let i = 0; i < arrLenHalf; i++) { // 몇 번째 바깥 테두리 레이어 회전할지?
            for (let j = i; j < arrLen - i - 1; j++) { //j는 현재 테두리에서의 열 인덱스 
                  const temp = arr[i][j]; // 현재 위치값 임시 저장 (i,j)
                  const offset = arrLen - i - 1; // 현재 레이어에서 반대쪽 끝 인덱스 계산

                  arr[i][j] = arr[offset - j + i][i]; //왼쪽 -> 위
                  arr[offset - j + i][i] = arr[offset][offset - j + i]; // 아래 -> 왼쪽
                  arr[offset][offset - j + i] = arr[j][offset]; // 오른쪽-> 아래
                  arr[j][offset] = temp; // 위(현재) -> 오른쪽
            }
        }
    }

    function isAnswer(){
        let res = true;
        for(let i=0;i<lockLen;i++){
            for(let j=0;j<lockLen;j++){
                const offset = keyLen-1;
                if(maps[offset+i][offset+j] % 2 == 0){
                    return false;
                }
            }
        }
        return true;
    }

    function mapMark(offsetY, offsetX, mark){
        for(let y=0; y<keyLen ;y++){
            for(let x=0; x<keyLen ;x++){
                maps[y + offsetY][x + offsetX] += key[y][x]*mark;
            }
        }
    }

    function unLock(){
        const canMoveSize = mapLen - keyLen + 1; //열쇠를 움직일 수 있는 시작 위치 개수 mapLen(확장된 맵의 한 변 길이), keyLen(열쇠 크기), 
        for(let i=0;i < canMoveSize ;i++){
            for(let j=0;j < canMoveSize ;j++){
                const offsetY = i;
                const offsetX = j; // 두개의 이중 반복문으로 열쇠를 모든 위치에 올려봄
                //offsetY, offsetX 현재 열쇠의 시작 좌표(y,x)

                mapMark(offsetY,offsetX, 1); //열쇠 값을 maps에 더함 (mark=1 올림) 
                //올리는 이유 자물쇠와 열쇠를 합쳐서 홈이 채워지는지 검사하기 위함 
                if(isAnswer()) return true;
                mapMark(offsetY,offsetX, -1); // 열쇠를 maps에서 빼서 원래 상태로 복구 
                //다음 위치에서 다시 검사할 수 있도록 초기화
            }
        }
        return false;
    }

    if(unLock()) return true;
    rotate(key);

    if(unLock()) return true;
    rotate(key);

    if(unLock()) return true;
    rotate(key);

    if(unLock()) return true;
    return false;
    //열쇠를 회전시켜가며 unlock 검사
}