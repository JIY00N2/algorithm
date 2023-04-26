/*2023.04.26
01 타켓 넘버

function solution(numbers, target) {
    let answer = 0;
    dfs(0,0);
    function dfs(index ,sum) {
        if(index < numbers.length){
            dfs(index +1, sum + numbers[index]);
            dfs(index +1, sum - numbers[index]);
        }else{
            if(sum === target){
                answer++
            }
        }
    }
    return answer;
}
LIFO방식
[+1, +1, +1, +1, +1]
[+1, +1, +1, +1, -1]
[+1, +1, +1, -1, +1]
[+1, +1, +1, -1, -1]
[+1, +1, -1, +1, +1]
[+1, +1, -1, +1, -1]
[+1, +1, -1, -1, +1]
[+1, +1, -1, -1, -1]
.
.
.
*/
