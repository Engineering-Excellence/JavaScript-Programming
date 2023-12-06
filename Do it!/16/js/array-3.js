/* Array 객체의 메서드 */
'use strict'

// 배열 2개 합치기
let nums = [1, 2, 3]
let chars = ['a', 'b', 'c', 'd']

let numsChars = nums.concat(chars)
let charsNums = chars.concat(nums)
console.log(`nums에 chars 합치면: ${numsChars}\nchars에 nums 합치면: ${charsNums}`)

// 배열 안의 요소 합치기
let string1 = nums.join()
console.log('구분자 없이:', string1)
let string2 = chars.join('/')
console.log("'/' 구분자 지정:", string2)

// 배열에 새로운 요소 추가하기 - 새로운 length값 반환
let ret1 = nums.push(4, 5)  // 배열 맨 끝에 새로운 요소를 추가
console.log(`length=${ret1}, nums=${nums}`)
let ret2 = nums.unshift(0)  // 배열 맨 앞에 새로운 요소를 추가
console.log(`length=${ret2}, nums=${nums}`)

// 배열에서 요소 꺼내기 - 꺼낸 요솟값 반환
let popped1 = chars.pop()   // 마지막 요소 꺼냄
console.log(`popped1=${popped1}, chars=${chars}`)
let popped2 = chars.shift() // 첫 번째 요소 꺼냄
console.log(`popped1=${popped2}, chars=${chars}`)
