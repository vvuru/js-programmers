/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120833
 */
function solution(numbers, num1, num2) {
    let answer = [];
    for(let i=0; i<numbers.length; i++) {
        if(i>=num1 && i<=num2) {
            answer.push(numbers[i]);
        }
    }

    return answer;
}

function solution2(numbers, num1, num2) {
    return numbers.slice(num1,num2+1);
}

function solution3(numbers, num1, num2) {
    return numbers.splice(num1,num2-num1+1);
}

const numbers = [1,2,3,4,5];
const num1 = 1;
const num2 = 3;
console.log(solution3(numbers, num1, num2));