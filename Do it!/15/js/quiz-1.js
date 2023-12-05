/* 사용자에게 입력받은 두 수의 값이 같으면 두 수를 곱하고, 다르면 더하는 함수 */
'use strict'

const sumMultiply = (x, y) => {
    return x === y ? x * y : x + y
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('숫자 2개를 공백으로 구분하여 입력하세요.: ', input => {
    let nums = input.split(' ')
    console.log(sumMultiply(parseInt(nums[0]), parseInt(nums[1])))
    rl.close()
})
