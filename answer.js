/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181952
 */
const readline = require('readline');
let input = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str)
});

fu

