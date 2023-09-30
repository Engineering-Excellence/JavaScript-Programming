'use strict'

// 자리 배치도 만들기 1

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('입장객은 몇 명인가요? ', memNum => {
    memNum = parseInt(memNum)   // 전체 입장객 수

    rl.question('한 줄에 몇 명씩 앉습니까? ', colNum => {
        colNum = parseInt(colNum)   // 한 줄에 앉을 사람 수
        console.log('모두', Math.ceil(memNum / colNum), '개의 줄이 필요합니다.')

        rl.close()
    })
})