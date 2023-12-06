/* splice(): 배열의 요소를 삭제하거나 추가하기 */
'use strict'

// splice(인덱스) 메서드의 인수가 1개인 경우 요소 삭제하기
let numbers = [1, 2, 3, 4, 5]
let newNumbers = numbers.splice(2)  // 인덱스 2부터 끝까지 삭제하고 새로운 배열 반환
console.log('반환된 배열:', newNumbers)
console.log('변경된 배열:', numbers)

// splice(인덱스, 개수) 메서드의 인수가 2개인 경우 요소 삭제하기
let study = ['html', 'css', 'javascript', 'jquery']
let newStudy = study.splice(2, 1)
console.log('반환된 배열:', newStudy)
console.log('변경된 배열:', study)

// splice(인덱스, 개수, 추가요소) 메서드의 인수가 3개인 경우 요소 삭제하기
let newStudy2 = study.splice(2, 1, 'react')
console.log('반환된 배열:', newStudy2)
console.log('변경된 배열:', study)
