/* slice(): 배열의 일부 요소만 추출하여 새로운 배열 리턴 */
'use strict'

// slice(인덱스) 메서드의 인수가 1개인 경우 요소 꺼내기
let colors = ['red', 'green', 'blue', 'white', 'black']
let colors2 = colors.slice(2)   // 인덱스 값이 2인 요소부터 마지막 요소까지 꺼내기
console.log(colors2)

// slice(인덱스, 인덱스) 메서드의 인수가 2개인 경우 요소 꺼내기
let colors3 = colors.slice(2, 4)    // 인덱스값이 2부터 3인 요소까지 꺼내기
console.log(colors3)
