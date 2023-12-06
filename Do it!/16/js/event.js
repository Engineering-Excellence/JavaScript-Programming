/* 이벤트 당첨자 뽑기 프로그램 */
'use strict'

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('전체 응모자 수를 입력하세요.: ', seed => { // 응모자 수 입력받기
    const picked = Math.floor(Math.random() * seed + 1)   // 무작위 수 뽑기

    console.log(`전체 응모자 수: ${seed}명`)
    console.log(`당첨자: ${picked}번`)

    rl.close()
})
