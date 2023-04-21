/*2023.04.20
1. 신규 아이디 추천 ⭕

다른사람 풀이 
const solution = (new_id) => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')        
    return id.padEnd(3, id[id.length-1])
}

내 풀이
function solution(new_id) {
   
    const regex1 = /[^a-z\d\-\_\.]/g;
    const regex2 = /\.{2,}/g;
    const regex3 = /^\.|\.$/g;
    
    let filterId = new_id
    .toLowerCase() //...!@bat#*..y.abcdefghijklm
    .replace(regex1, '') // ...bat..y.abcdefghijklm
    .replace(regex2, '.') // .bat.y.abcdefghijklm
    .replace(regex3, ''); // bat.y.abcdefghijklm
    
    if(filterId.length === 0)
        filterId += "a";
    
    let newId = '';
    if(filterId.length >= 16){
        filterId = filterId.split("").splice(0,15).join("");
        if(filterId[filterId.length-1] === "."){
            filterId = filterId.split("").splice(0,filterId.length-1).join("");
        }
    }
    let lastChar = filterId[filterId.length-1];
    
    if(filterId.length <= 2){
        while(filterId.length !== 3){
            filterId += lastChar;
        }
    }
    return filterId;
}

2. 둘만의 암호 ⭕

다른 사람 풀이
function solution(s, skip, index) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
    return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
}

내 풀이
function solution(s, skip, index) {
    
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    let arr = [];
    for(let i = 0; i < skip.length; i++){
        alpha = alpha.replace(skip[i],'');
    }
    for(let i = 0; i < s.length; i++){
        arr.push(alpha.indexOf(s[i])+index);
    }
    for(let i = 0; i < s.length; i++){
        if(arr[i] >= alpha.length){
            arr[i] = arr[i] % alpha.length;
            answer+=alpha.charAt(arr[i]);
        }else{
            answer += alpha.charAt(arr[i]);
        }
    }
    return answer;
}

3. 성격 유형 검사하기 ⭕
 
다른 사람 풀이
function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}

내 풀이
function solution(survey, choices) {
    let answer = '';
    let type = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    let score = 0;
    for(let i = 0; i < survey.length; i++){  
        let leftNot = survey[i][0];
        let right = survey[i][1];
        if(choices[i] <= 3){
            // 비동의
            switch(choices[i]){
                case 1:
                    score = 3;
                    break;
                case 2:
                    score = 2;
                    break;
                case 3:
                    score = 1;
                    break;
            }  
            type[Object.values(leftNot)] += Number(Object.keys(leftNot)) + score;    
        }else if(choices[i] >= 5){
            // 동의
            switch(choices[i]){
                case 5:
                    score = 1;
                    break;
                case 6:
                    score = 2;
                    break;
                case 7:
                    score = 3;
                    break;
            }
            type[Object.values(right)] += Number(Object.keys(right)) + score;   
        }
    }
    const arr = Object.entries(type); 
    for(let i = 0; i < arr.length; i+=2){
        if(arr[i][1] >= arr[i+1][1]){
            answer += arr[i][0];
        }else{
            answer += arr[i+1][0];
        }        
    }
    return answer;
}

4. 햄버거 만들기 ❌
 
내 풀이
function solution(ingredient) {
    let cnt = 0;
    const stack = [];
    for(let i = 0; i < ingredient.length; i++){
        stack.push(ingredient[i]);
        if(stack.slice(-4).join('') === "1231"){
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            cnt++;
        }
    }
    return cnt;
}

5. 대충 만든 자판 ❌ 문제 이해가 안됨;
 
다른 사람 풀이
function solution(keymap, targets) {
    const answer = [];
    const map = {}
    for (const items of keymap) {
        items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
    }
    for (const items of targets) {
        answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
    }
    return answer;
}

내 풀이
function solution(keymap, targets) {
    let answer = [];
    // 문자를 출력하기 위한 최소 횟수를 체크하면 되기 때문에 Map 객체를 사용
    const map = new Map();
    // keymap을 순회하면서 1. map 객체에 key가 없거나, 2. 문자를 누른 횟수 기존에 저장되어 있는 문자의 누른 횟수보다 작다면 문자를 key 값으로 i+1을 value로 저장한다.
    for(const key of keymap){
        for(let i = 0; i <key.length; i++){
            if(!map.has(key[i]) || i + 1 < map.get(key[i]))
                map.set(key[i], i+1);
        }
    }
    // target 배열을 순회하면서 map 객체에서 값을 가져와 count를 증가시킨다. 이때 map객체에 값이 없다면 undefined가 저장되고 count값에 더하게 되면 NaN이 된다.
    for(const target of targets){
        let cnt = 0;
        for(let i = 0; i < target.length; i++){
            cnt += map.get(target[i]);
        }
        // NaN은 falsy 값으로 평가되기 때문에 count || -1을 answer에 push한다.
        answer.push(cnt || -1);
    }
    return answer;
}
*/