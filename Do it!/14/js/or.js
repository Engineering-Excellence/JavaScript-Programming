'use strict'

// OR 연산자를 사용해 조건 체크하기

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let numberOne, numberTwo

rl.question('10 미만인 첫번째 숫자를 입력하세요.: ', answer => {
    numberOne = parseInt(answer)

    rl.question('10 미만인 두번째 숫자를 입력하세요.: ', answer => {
        numberTwo = parseInt(answer)
        if (numberOne < 10 || numberTwo < 10) {
            console.log('입력한 두 숫자 중 적어도 하나는 10 미만입니다.')
        } else {
            console.log('10 미만인 수가 없습니다.')
        }

        rl.close()
    })
})