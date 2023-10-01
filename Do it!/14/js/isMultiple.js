'use strict'

// 사용자가 입력한 숫자가 4의 배수인지 확인하는 프로그램
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('4의 배수일가 아닐까')

rl.question('숫자를 입력하세요.: ', answer => {
    console.log(`${answer}은(는) 4의 배수${parseInt(answer) % 4 === 0 ? '입니다.' : '가 아닙니다.'}`)
    rl.close()
})