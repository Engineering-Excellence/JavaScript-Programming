'use strict'

// 숫자를 입력받은 후 1부터 그 숫자까지 3의 배수를 모두 출력하고 출력된 3의 배수가 총 몇 개인지 알려주는 프로그램
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('3의 배수 찾기')

rl.question('몇까지 3의 배수를 찾을까요? ', answer => {
    let str = ''
    let cnt = 0
    for (let i = 1; i <= parseInt(answer); i++) {
        if (i % 3 === 0) {
            str += i + ', '
            cnt++
        }
    }
    console.log(str.substring(0, str.length - 2))
    console.log(`${answer}까지 3의 배수의 개수: ${cnt}개`)
    rl.close()
})