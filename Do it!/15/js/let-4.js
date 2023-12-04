// 재선언 할 수 없는 let 변수
'use strict'

const calcSum = n => {
    let sum = 0
    for (let i = 1; i < n + 1; i++) {
        sum += i
    }
    // let sum // sum 변수 재선언 불가 → SyntaxError: Identifier 'sum' has already been declared
    console.log(sum)
}

calcSum(10)
