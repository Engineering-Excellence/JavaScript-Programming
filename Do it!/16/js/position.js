/* 팝업 창 위치 지정하기 */
'use strict'

onload = () => {
    document.write('<p></p>')
    document.querySelector('p').innerHTML = '왼쪽에서 100 픽셀, 위에서 200 픽셀 떨어진 위치에 <br> 팝업 창이 표시됩니다.'
    open('notice.html', 'pop', 'width=500, height=400, left=100, top=200')
}
