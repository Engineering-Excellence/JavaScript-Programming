// var 예약어를 사용한 변수의 재할당과 재선언

function addNumber(num1, num2) {
    return num1 + num2  // 2개의 수 더하기
}

var sum = addNumber(10, 20) // sum 변수 선언, 함수 호출
console.log(sum)

sum = 50    // sum 변수 재할당
console.log(sum)

var sum = 100   // sum 변수 재선언
console.log(sum)
