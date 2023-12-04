// 매개변수가 있는 즉시 실행 함수 만들기

(function (a, b) {  // 매개변수
    sum = a + b;    // 전역 변수(strict mode 미사용)
}(100, 200));   // 인수

console.log('함수 실행 결과:', sum);
