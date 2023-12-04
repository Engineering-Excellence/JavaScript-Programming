// 즉시 실행 함수 만들기
'use strict';

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

(function () {
    rl.question('이름을 입력하세요.: ', userName => {
        console.log(`안녕하세요? ${userName}님!`);
        rl.close();
    });
}());
