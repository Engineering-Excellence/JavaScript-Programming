// 버튼을 클릭해서 상세 설명 표시하거나 닫기
'use strict'

const showDetail = () => {
    document.querySelector('#desc').style.display = 'block'
    document.querySelector('#open').style.display = 'none'
}

const hideDetail = () => {
    document.querySelector('#desc').style.display = 'none'
    document.querySelector('#open').style.display = 'block'
}

window.onload = hideDetail

document.querySelector('#open').onclick = showDetail
document.querySelector('#close').onclick = hideDetail
