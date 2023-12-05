// 버튼을 클릭해서 상세 설명 표시하거나 닫기
'use strict'

const showDetail = () => {  // 상세 설명을 화면에 표시하는 함수
    document.querySelector('#desc').style.display = 'block'
    document.querySelector('#open').style.display = 'none'
}

const hideDetail = () => {  // 상세 설명을 화면에서 감추는 함수
    document.querySelector('#desc').style.display = 'none'
    document.querySelector('#open').style.display = 'block'
}
