'use strict'

// AND 연산자를 사용해 조건 체크하기

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let numberOne, numberTwo

rl.question('50 미만인 첫번째 숫자를 입력하세요.: ', answer => {
    numberOne = parseInt(answer)

    rl.question('50 미만인 두번째 숫자를 입력하세요.: ', answer => {
        numberTwo = parseInt(answer)
        if (numberOne < 50 && numberTwo < 50) {
            console.log('숫자 2개 모두 50 미만입니다.')
        } else {
            console.log('조건에 부합하지 않는 숫자가 존재합니다.')
        }

        rl.close()
    })
})