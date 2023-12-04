// var 예약어로 지역 변수 선언하기

function addNumber() {
    var sum = 10 + 20   // 지역 변수 선언
}

addNumber()
console.log(sum)    // 지역 변수를 사용 → ReferenceError: sum is not defined
