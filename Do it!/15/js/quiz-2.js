/* 두 수를 입력받아 크기를 서로 비교하여 더 큰 숫자를 표시 */
'use strict'

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('비교할 첫 번째 숫자: ', input => {
    let num1 = parseInt(input)
    rl.question('비교할 두 번째 숫자: ', input => {
        let num2 = parseInt(input)
        console.log(`${Math.max(num1, num2)}(이)가 ${Math.min(num1, num2)}(이)보다 큽니다.`)
        rl.close()
    })
})
