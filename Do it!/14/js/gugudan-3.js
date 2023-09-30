'use strict'

// break 문으로 구구단을 3단까지만 표시하기
for (let i = 2; i < 10; i++) {
    console.log(`[${i}단]`)
    for (let j = 1; j < 10; j++) {
        console.log(`${i} × ${j} = ${i * j}`)
    }
    if (i === 3) break
    console.log()
}