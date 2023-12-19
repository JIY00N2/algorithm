/*2023.04.17
1. 옹알이(2) ❌

내 풀이
function solution(babbling) {
    let cnt = 0;
    const arr = ["aya", "ye","woo","ma"];
    for(let i = 0; i < babbling.length; i++){
        let word = babbling[i]; //ayaye
        for(let j = 0; j < arr.length; j++){
            // 두번이상 반복하면 break
            if(word.includes(arr[j].repeat(2))){
                break;
            }
            // 말할 수 있는 단어가 반복되지 않는다면 배열 arr의 원소로 split 진행
            word = word.split(arr[j]).join(' ');
        }
        // 공백 문자를 제거하여 다시 합침
        if(word.split(' ').join('').length === 0)
            cnt++;
    }
    return cnt;
}

2. [카카오 인턴] 키패드 누르기 ❌
다른 사람 풀이
function calDist(num, leftNow, rightNow, pos, handed){
    const X = 0, Y = 1
    const leftDist = Math.abs(pos[leftNow][X] - pos[num][X]) + 
        Math.abs(pos[leftNow][Y] - pos[num][Y])
    const rightDist = Math.abs(pos[rightNow][X] - pos[num][X]) + 
        Math.abs(pos[rightNow][Y] - pos[num][Y])
    // 거리가 같으면
    if (leftDist === rightDist) return handed === 'right' ?  'R' : 'L';
    return leftDist > rightDist ? 'R' : 'L'
}

function solution(numbers, hand) {
    // 왼손잡이인지 오른손잡이인지
    const HANDED = hand;
    // 번호 좌표화
    const position = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    // 손 위치 초기화
    let rightNow = '#', leftNow = '*';
    // solution
    let result = ''
    for (const num of numbers){
        // 왼쪽 키라인
        if (num % 3 === 1){
            result += 'L';
            leftNow = num;
        }
        // 오른쪽 키라인
        else if (num !==0 && num % 3 === 0){
            result += 'R';
            rightNow = num;
        }
        // 중간 키라인
        else{
            result += calDist(num, leftNow, rightNow, position, HANDED)
            result[result.length-1] === 'L'? leftNow = num : rightNow = num
        }
    }

    return result;
}
내 풀이
function solution(numbers, hand) {
    let answer = '';
    let left = 10; // *
    let right = 12; // #
    for(let i = 0; i <numbers.length; i++){
        let num = numbers[i];
        if(num === 0){
            num = 11;
        }
        if(num === 1 || num === 4 || num === 7){
            answer += "L";
            left = num;
        }else if(num === 3 || num === 6 || num === 9){
            answer += "R";
            right = num;
        }else{
            let nowLeft = 0; // 현재 왼손이 위치한 숫자 키패드
            let nowRight = 0; // 현재 오른손이 위치한 숫자 키패드
            if(left === 1 || left === 4 || left === 7 || left===10){
                nowLeft = Math.abs((num - (left + 1))/ 3) + 1;
            }
            // 왼손이 가운데에 위치한다면 
            else{
                nowLeft = Math.abs((num - left) / 3);
            }
            if(right === 3 || right === 6 || right === 9 || right === 12){
                nowRight = Math.abs((num - (right - 1)) / 3) + 1;
            }
            // 오른손이 가운데에 위치한다면
            else{
                nowRight = Math.abs((num - right) / 3);
            }
            // 거리가 같다면
            if(nowLeft === nowRight){
                if(hand === "left"){
                    answer+="L";
                    left = num;
                }else{
                    answer+="R";
                    right = num;
                }
                //오른손이 더 가깝다면
            }else if(nowLeft > nowRight){
                answer += "R";
                right = num;
            }else{
                answer += "L";
                left = num;
            }
        }
        
    }
    return answer;
    
}
*/