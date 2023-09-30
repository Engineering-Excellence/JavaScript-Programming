'use strict'

// while 문으로 팩토리얼 만들기
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let n, msg

rl.question('숫자를 입력하세요.: ', answer => {
    n = parseInt(answer)
    if (!isNaN(n) && n >= 0) {
        let nFact = 1   // 결괏값
        let i = 1  // 카운터

        while (i <= n) {
            nFact *= i++
        }
        msg = `${n}! = ${nFact}`    // 결괏값을 표시할 문자열
    } else {
        msg = '잘못된 입력입니다.'
    }
    console.log(msg)    // 결과 표시
    rl.close()
})