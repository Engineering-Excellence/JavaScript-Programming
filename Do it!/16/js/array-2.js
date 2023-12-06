/* 배열을 만들고 요소 표시하기 */
'use strict'

// let numbers = new Array('one', 'two', 'three', 'four') // 생성자 함수로 배열 생성
let numbers = ['one', 'two', 'three', 'four']   // 배열 선언

/*
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
*/

for (const number of numbers) {
    console.log(number)
}
