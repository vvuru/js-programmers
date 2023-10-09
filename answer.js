/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120854
 */
function solution(strlist) {
    let answer = [];
    strlist.forEach((val)=>{
        answer.push(val.length);
    })
    return answer;
}

strlist = ["We","are","the","world!"];
console.log(solution(strlist));