/*
1. 7의 개수

다른사람 풀이 
function solution(array) {
    return array.join('').split('7').length-1;
}

내 풀이
function solution(array) {
    let cnt = 0;
    const str = String(array).split('');
    for(let i = 0; i < str.length; i++){
        const item = str[i];
        if(item === "7"){
            cnt += 1;
        }
    }
    return cnt;
}

2. 잘라서 배열로 저장하기

다른 사람 풀이
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}

내 풀이
function solution(my_str, n) {
   let arr = []
   for(let i = 0; i< my_str.length; i+=n){
       arr.push(my_str.slice(i,i+n));
   }
    return arr;
}

3. 직사각형 넓이 구하기

내 풀이
function solution(dots) {
    let x = [];
    let y = [];
    for(let i = 0; i< dots.length; i++){
        x.push(dots[i][0]);
        y.push(dots[i][1]);
    }
    const xlength = Math.max(...x)- Math.min(...x);
    const ylength = Math.max(...y) - Math.min(...y);
    const area = xlength * ylength;
    return area;
}

4. 캐릭터의 좌표

다른사람 풀이
function solution(keyinput, board) {
    let key = {"right" : [1,0], "up" : [0,1], "down" : [0,-1], "left" : [-1,0]};


    let rslt = keyinput.map(v => key[v]).reduce((a,b) => { 
        if (Math.abs(a[0] + b[0]) > board[0]/2 || Math.abs(a[1] + b[1]) > board[1]/2) 
            return [a[0],a[1]] ; 

        return [a[0] + b[0], a[1] + b[1]];}
    , [0,0])


    return rslt;
}

내 풀이

function solution(keyinput, board) {
    let answer = [];
    // boarder / 2 까지 움직일 수 있다.
    let x = 0, y = 0;
    for(let i = 0; i<keyinput.length; i++){
        const str = keyinput[i];
        if(str === "left"){
            x -= 1;
            if(Math.abs(x) > board[0]/2){
                x = parseInt((-1 * board[0]) / 2 );
            }
        }else if(str ==="right"){
            x +=1;
            if(x > board[0]/2){
                x = parseInt(board[0] / 2 );
            }
        }else if(str === "up"){
            y +=1;
            if(y > board[1]/2){
                y = parseInt(board[1] / 2 );
            }
        }else{
            y-=1;
            if(Math.abs(y) > board[1]/2){
                y = parseInt((-1 * board[1]) / 2 );
            }
        }
    }
    answer.push(x,y);
    return answer;
}
 */