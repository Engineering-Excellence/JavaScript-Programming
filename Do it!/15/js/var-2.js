// var 예약어를 사용한 지역 변수와 전역 변수

function addNumber() {
    var sum = 10 + 20   // 지역 변수 선언
    multi = 10 * 20 // 전역 변수 선언
}

addNumber()
console.log(multi) // 전역 변수를 사용
