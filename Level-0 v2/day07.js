/*
2. 주사위 게임 3
function solution(a, b, c, d) {
    if (a === b && a === c && a === d) return 1111 * a

    if (a === b && a === c) return (10 * a + d) ** 2
    if (a === b && a === d) return (10 * a + c) ** 2
    if (a === c && a === d) return (10 * a + b) ** 2
    if (b === c && b === d) return (10 * b + a) ** 2

    if (a === b && c === d) return (a + c) * Math.abs(a - c)
    if (a === c && b === d) return (a + b) * Math.abs(a - b)
    if (a === d && b === c) return (a + b) * Math.abs(a - b)

    if (a === b) return c * d
    if (a === c) return b * d
    if (a === d) return b * c
    if (b === c) return a * d
    if (b === d) return a * c
    if (c === d) return a * b

    5. 문자열 여러 번 뒤집기
    function solution(my_string, queries) {
    let answer = '';
    for (let i = 0; i < queries.length; i++) {
        let firstText = my_string.substring(0,queries[i][0]);
        let middleText = my_string.substring(queries[i][0], queries[i][1]+1).split('').reverse().join('');
        let lastText = my_string.substr(queries[i][1]+1);
        my_string = firstText + middleText + lastText;
    }
    answer = my_string;
 
*/