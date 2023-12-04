// 매개변수를 사용한 함수 선언하기
'use strict'

function addNumber(num1, num2) {
    let sum = num1 + num2  // 두 수를 더하여 sum에 저장
    return sum  // 반환값 지정
}

let result = addNumber(2, 3)    // 함수 호출
console.log('두 수를 더한 값:', result)
