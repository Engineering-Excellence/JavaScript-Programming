'use strict'

// readline 모듈 불러오기 및 인터페이스 생성
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// 3의 배수 확인하기 1
rl.question('숫자를 입력하세요.: ', userNumber => {
    if (userNumber % 3 === 0) {
        console.log('3의 배수입니다.')
    } else {
        console.log('3의 배수가 아닙니다.')
    }

    rl.close()  // 인터페이스 닫기
})