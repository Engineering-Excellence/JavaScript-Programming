'use strict'

// switch 문으로 조건 체크하기

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let session;

rl.question('1-마케팅, 2-개발, 3-디자인\n관심 세션을 선택해주세요.: ', answer => {
    session = parseInt(answer)

    switch (session) {
        case 1:
            console.log('마케팅 세션은 201호에서 진행됩니다.')
            break
        case 2:
            console.log('개발 세션은 203호에서 진행됩니다.')
            break
        case 3:
            console.log('디자인 세션은 205호에서 진행됩니다.')
            break
        default:
            console.error('잘못된 입력입니다.')
            break
    }

    rl.close()
})
