/*2023.04.20
1. [1차] 캐시 ❌

다른사람 풀이 
function solution(cacheSize, cities) {
    const MISS = 5, HIT = 1;
    if (cacheSize === 0) return MISS * cities.length;
    let answer = 0,
        cache = [];
    cities.forEach(city => {
        city = city.toUpperCase();
        let idx = cache.indexOf(city);
        if (idx > -1) {
            cache.splice(idx, 1);
            answer += HIT;
        } else {
            if (cache.length >= cacheSize) cache.shift();
            answer += MISS;
        }
        cache.push(city);
    });
    return answer;
}

내 풀이
function solution(cacheSize, cities) {
    var answer = 0;
    let cityArr = [];
    for(let i = 0; i < cities.length; i++){
        let city = cities[i].toLowerCase();
        let findCity = cityArr.find((v)=> v === city);
        // 도시가 존재하지 않는 경우
        if(!findCity){
            cityArr.push(city);
            if(cityArr.length > cacheSize){
                cityArr.shift();
            }
            answer += 5;
        }
        else{
            cityArr = cityArr.filter((v) => v !== city);
            // 해당 도시를 배열의 맨 뒤로 옮긴다
            cityArr.push(city);
            answer+=1;
        }
    }
     
    return answer;
}
// 현재 도시가 cityArr에 있는지 확인
// 도시가 없으면 cityArr에 push
// cityArr.length > cacheSize 가장 앞쪽의 city를 제거한후 answer +=5
// 도시가 존재하면 해당 도시를 배열의 맨 뒤로 옮긴후 answer+=1

2. 행렬의 곱셈 ❌

다른 사람 풀이
function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}

내 풀이
function solution(arr1, arr2) {
    const newArr = [];
    for(let i = 0; i < arr1.length; i++){
        let result = [];
        for(let j = 0; j < arr2[0].length; j++){
            let sum = 0;
            for(let k = 0; k < arr2.length; k++){
                sum += arr1[i][k] * arr2[k][j];
            }
            result.push(sum);
        }
        newArr.push(result);
    }
    // console.log(arr2[0]); [ 5, 4, 3 ]
    return newArr;
}
*/