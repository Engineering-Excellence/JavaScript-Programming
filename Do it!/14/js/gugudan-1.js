'use strict'

// for 문 2개로 구구단 만들기
for (let i = 2; i < 10; i++) {
    console.log(`[${i}단]`)
    for (let j = 1; j < 10; j++) {
        console.log(`${i} × ${j} = ${i * j}`)
    }
    console.log()
}