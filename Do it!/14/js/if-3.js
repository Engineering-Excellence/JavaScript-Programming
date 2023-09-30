'use strict'

// 조건 연산자를 사용해 3의 배수 확인하기

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('숫자를 입력하세요.: ', answer => {
    let userNumber = parseInt(answer)
    if (!isNaN(userNumber)) {
        console.log(userNumber % 3 === 0 ? '3의 배수입니다.' : '3의 배수가 아닙니다.')
    } else {
        console.log('입력이 취소됐습니다.')
    }

    rl.close()
})
