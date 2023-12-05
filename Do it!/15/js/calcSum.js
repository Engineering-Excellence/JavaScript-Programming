// 1부터 n까지 숫자를 더하는 함수
'use strict'

const calcSum = n => n * (n + 1) / 2

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('얼마까지 더할까요? ', userNumber => {
    console.log(calcSum(parseInt(userNumber)))
    rl.close()  // 입력 종료
})
