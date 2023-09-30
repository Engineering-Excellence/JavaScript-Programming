'use strict'

// 1부터 10까지 짝수만 더하기
let n = 10
let sum = 0

for (let i = 1; i < n + 1; i++) {
    if (i % 2 === 1) continue
    sum += i

    console.log(`${i.toString().padStart(2, ' ')} ------ ${sum.toString().padStart(2, ' ')}`)
}