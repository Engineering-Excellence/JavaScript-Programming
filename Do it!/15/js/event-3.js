'use strict'

const changeColor = () => document.querySelector('p').style.color = '#f00'

// 방법 1: 웹 요소를 변수로 지정 & 미리 만든 함수 사용
const changeBtn = document.querySelector('#change1')
changeBtn.onclick = changeColor

// 방법 2: 웹 요소를 따로 변수로 만들지 않고 사용
document.querySelector('#change2').onclick = changeColor

// 방법 3: 함수를 직접 선언
document.querySelector('#change3').onclick = () => document.querySelector('p').style.color = '#00f'
