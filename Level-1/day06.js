/* 2023.04.04

1. k번째수

다른사람 풀이
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}

내 풀이
function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++){
        const com = commands[i]; // [2,5,3]
        const start = com[0] - 1;
        const end = com[1];
        const idx = com[2] - 1;
        const newArr = array.slice(start,end);
        const sortedArr = newArr.sort((a,b)=>a-b);
        answer.push(sortedArr[idx]);
    }
    return answer;
}

2. 크기가 작은 부분문자열

다른사람 풀이
function solution(t, p) {
    let count = 0;
    for(let i=0; i<=t.length-p.length; i++) {
        let value = t.slice(i, i+p.length);
        if(+p >= +value) count++;
    }
    return count;
}

내 풀이
function solution(t, p) {
    let cnt = 0;
    const length = p.length; // 3
    const numP = Number(p); // 271

    let newArr = [];
    const arr = t.split(""); // ["3","1","4","1","4","9","2"]
    for(let i = 0; i < t.length; i++){
        const item = arr.slice(i,length+i);
        if(item.length === length){
            newArr.push(item);
        }else{
            break;
        }    
    }
    for(let i = 0; i < newArr.length; i++){
        const one = newArr[i].join("");
        if(one <= numP){
            cnt+=1;
        }
    }
    return cnt;
}

3. 두 개 뽑아서 더하기

다른사람 풀이
function solution(numbers) {
    const temp = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }
    const answer = [...new Set(temp)]
    return answer.sort((a, b) => a - b)
}

내 풀이
function solution(numbers) {
    let arr = [];
    let sum = 0;
    const sortedArr = numbers.sort((a,b)=>a-b);
    for(let i = 0; i < sortedArr.length; i++){
        const numI = sortedArr[i]; // 1
        for(let j = i+1; j < sortedArr.length; j++){
            const numJ = sortedArr[j];
            sum = numI + numJ;
            arr.push(sum);
        }   
    }
    const answer = arr => [...new Set(arr)];
    return answer(arr.sort((a,b)=>a-b));
}

4. 콜라 문제 ❌

다른사람 풀이
function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        answer += parseInt(n / a) * b;
        n = parseInt(n / a) * b + n % a;
    }
    return answer;
}

내 풀이
function solution(a, b, n) {
    // 받은 콜라 수
    let change = 0
    // 교환 가능한 수량이 아닐때까지 반복
    while(n >= a) {
        change += Math.floor(n/a)*b
        n = Math.floor(n/a)*b + n%a
    }
    return change
}

5. 푸드 파이트 대회

다른사람 풀이
function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}

내 풀이
function solution(food) {
    let answer = "";
    for(let i = 1; i < food.length; i++){
        const item = ~~(food[i] / 2); // 1 0 3
        answer += String(i).repeat(item);
    }
    const str = answer.split("").reverse().join("");
    answer += "0" + str;
    return answer;
}

6. 가장 가까운 글자 ❌

다른사람 풀이
#1 
const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });

#2 
function solution(s) {
    let stack = [];
    let ans = [];
    
    [...s].forEach((str) => {
        if(!stack.includes(str)){
            ans.push(-1);
        }
              
        if(stack.includes(str)){
            ans.push(stack.length - stack.lastIndexOf(str));
        }
                   
        stack.push(str);
    })
    
    return ans;
}

내 풀이 (스택 이용)
function solution(s) {
    let stack = []; // 문자열이 하나씩 들어감
    let answer = []; // 결과 값
    for(let i = 0; i < s.length; i++){
        if(!stack.includes(s[i])){
            // 넣으려는 문자열이 스택에 존재하지 않는다면
            answer.push(-1);
            stack.push(s[i]);
            continue;
        }
        if(stack.includes(s[i])){
            // 넣으련느 문자열이 스택에 존재한다면 스택길이 - 스택 가장 위쪽에 있는 해당 문자열의 인덱스
            answer.push(stack.length - stack.lastIndexOf(s[i]));
            stack.push(s[i]);
            continue;
        }
    }
    return answer;
}
7. 2016년 ❌

다른사람 풀이
function getDayName(a,b){
    var tempDate = new Date(2016, a-1, b);

    return tempDate.toString().slice(0,3).toUpperCase();
}

내 풀이 
function solution(a,b){
    // 윤년 2월에 29일
    // 4, 100, 400으로 나누어지는 년도는 윤년이다.
    const weeks = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const month = [0,31,29,31,30,31,30,31,31,30,31,30,31];
    let day = 0;
    
    for(let i = 1; i < a; i++){
        day += month[i]; // a달 전까지 모든 달에 대해 날짜수 더함
    }
    day += b-1; // 1월 0일이 아닌 1월 1일부터이므로 1 빼줌
    const answer = weeks[(5+day)%7];
    return answer;
}

8. 폰켓몬

다른사람 풀이
#1
function solution(nums) {
    let answer = [...new Set(nums)],
        limit = nums.length / 2;

    return answer.length > limit ? limit : answer.length;
}

#2 Set.size
function solution(nums) {
    const noDuplicatePokemon = new Set(nums);
    const pokemonVarietyCount = noDuplicatePokemon.size;
    const pokemonCounts = nums.length;
    return pokemonVarietyCount > pokemonCounts/2 ? pokemonCounts/2 : pokemonVarietyCount;

}

내 풀이
function solution(nums) {
    const choose = nums.length / 2; // 2마리 고르기
    const setNum = new Set(nums);
    const setArr = [...setNum];
    const answer = choose > setArr.length ? setArr.length : choose
    return answer;
}

9. 소수 찾기 ❌ 🎯

다른사람 풀이
#1. 제곱근 사용하기 제곱근(9)= 3
num의 제곱근보다 작은수에서 나눠지는 수가 안나온다면
num의 제곱근보다 큰수에서도 나눠지는 수가 나올수 없기 때문에
굳이 제곱근보다 큰 수까지 반복문을 돌릴 필요가 없다.
const isPrime = (num) =>{
    if(!num || num === 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return flase;
    }
    return true;
}

#2. 에라토스테네스의 체
1. 2부터 소수를 구하고자 하는 구간의 모든 수를 나열
2. 2는 소수이므로 오른쪽에 2를 씀
3. 남아있는 수 가운데 3은 소수이므로 오른쪽에 3을 씀
5. 자기 자신을 제외한 3의 배수를 모두 지움
6. 남아잇는 수 가운데 5는 소수이므로 오른쪽에 5를 씀
7. 자기 자신을 제외한 5의 배수를 모두 지움
... 반복
배열을 true로 채운 후 소수가 아닌 요소는 false로 바꾸고,
마지막에 배열내 true인 요소의 수를 구한다.

function solution(n) {
    let answer = 0;
    // 초깃값 설정
    // 주어진 숫자를 포함해야 하므로 n+1의 배열 생성후 전부 true로 변환
    // 0과 1은 소수에서 제외시키므로 false로 변경
    const arr = new Array(n+1).fill(true).fill(false,0,2); 
    const end = Math.sqrt(n) // 제곱근
    
    // 2부터 특정수의 배수에 해당하는 수를 모두 지움
    for(let i = 2; i <= end; ++i){
        // 이미 소수가 아닌 인덱스는 건너뛴다.
        if(arr[i] === false){
            continue; 
        }
        // 소수가 아닌 데이터는 false로 입력한다.
        for(let j = i * i; j <= n; j += i){
            arr[j] = false;
        }
    }

    // 소수의 갯수를 구한다.
    for(let i = 2; i <= n; ++i){
        if(arr[i] === true){
            answer++;
        }
    }
    return answer;
}

10. 모의고사 ❌

다른사람 풀이
function solution(answers) {
    let answer = [];
    const man1 = [1, 2, 3, 4, 5];
    const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] == man1[i % man1.length]) count[0]++;
        if(answers[i] == man2[i % man2.length]) count[1]++;
        if(answers[i] == man3[i % man3.length]) count[2]++;
    }

    const max = Math.max(count[0], count[1], count[2]);
    for(let i = 0; i < count.length; i++) {
        if(max == count[i]) answer.push(i + 1);
    }

    return answer;
}

내 풀이 ❌ 테스트케이스 오류남..
function scoring(student, answers){
    let cnt = 0;
    for(let i = 0; i < answers.length; i++){
        const ans = answers[i];
        const stu = student[i];
        if(ans === stu){
            cnt+=1;
        }
    }
    return cnt;
}
function solution(answers) {
    
    const student1 = [1,2,3,4,5];
    const student2 = [2,1,2,3,2,4,2,5];
    const student3 = [3,3,1,1,2,2,4,4,5,5];
    scoring(student1 ,answers); 
    scoring(student2 ,answers); 
    scoring(student3 ,answers); 
    const scoreArr = [scoring(student1 ,answers),scoring(student2 ,answers),scoring(student3 ,answers)]; // [5,0,0] [2,2,2]
    let answer =[];
    const max = Math.max(...scoreArr);
    let idx = 0;
    for(let i = 0 ; i < scoreArr.length; i++){
        if(max === scoreArr[i]){
            answer[idx] = i + 1;
            idx +=1;
        }
    }
    return answer;
}
*/

