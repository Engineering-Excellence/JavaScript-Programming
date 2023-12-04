// 블록 변수의 재할당
'use strict'

const calcSum = n => {
    let sum = 0
    for (let i = 1; i < n + 1; i++) {
        sum += i
    }
    sum = 100   // sum 변수 재할당
    console.log(sum)
}

calcSum(10)
