// 매개변수의 기본값 지정하기
'use strict'

const multiple = (a, b = 5, c = 10) => a * b + c    // b = 5, c = 10으로 기본값 지정

console.log(multiple(5, 10, 20))
console.log(multiple(10, 20))
console.log(multiple(30))
