// 변수와 호이스팅

var x = 10

function displayNumber() {
    console.log('x is', x)
    console.log('y is', y)  // undefined
    var y = 20
}

displayNumber()
