// 호이스팅이 없는 let 변수

var x = 10

function displayNumber() {
    console.log('x is', x)
    console.log('y is', y)  // 선언되지 않은 y를 사용 → ReferenceError: Cannot access 'y' before initialization
    let y = 20  // y 변수 선언
}

displayNumber()
