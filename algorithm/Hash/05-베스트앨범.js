/*
# 다른사람 풀이
function solution(genres, plays) {
    const dic = {};
    genres.forEach((genre,idx)=> {
        dic[genre] = dic[genre] ?  dic[genre] + plays[idx] : plays[idx];        
    });

    const dupDic = {};
    return genres          
          .map((genre, i) => ({genre: genre, count: plays[i], index: i}))
          .sort((a, b) => {               
               if(a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
               if(a.count !== b.count) return b.count - a.count;
               return a.index - b.index;
           })
           .filter(genre =>  {
               if(dupDic[genre.genre] >= 2) return false;
               dupDic[genre.genre] = dupDic[genre.genre] ? dupDic[genre.genre] + 1 : 1;
               return true;
            })
           .map(genre => genre.index);    
}
// 1. 장르별 plays의 합계가 젤 많은거
// 2. 1내에서 play횟수가 젤 많은거
// 3. play횟수가 같으면 index가 작은것부터

# 강사님 풀이
1. 같은 장르끼리 묶어야함
2. 묶인 노래들을 재생 순으로 정렬
3. 노래를 두개까지 자름
function solution(genres, plays){
  const genreMap = new Map();
  genres
    .map((genre, index)=>[genre, plays[index]]) // 장르와 play를 묶음
    .forEach(([genre, play], index) => {
        const data = genreMap.get(genre) || {total: 0, songs: [] };
        genreMap.set(genre, {
          total: data.total + play,
          songs: [...data.songs, {play, index}]
            .sort((a,b) => b.play - a.play)
            .slice(0,2)
        })
    });
    return [...genreMap.entries()]
      .sort((a,b) => b[1].total - a[1].total)
      .flatMap(item => item[1].songs)
      .map(song => song.index);
}
 */
