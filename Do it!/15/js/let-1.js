// 블록 변수 선언하기
'use strict'

function calcSum(n) {
    let sum = 0
    for (let i = 1; i < n + 1; i++) {
        sum += i
    }
    console.log(sum)
}

calcSum(10)
