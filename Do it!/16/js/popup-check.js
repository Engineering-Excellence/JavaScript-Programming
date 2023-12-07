/* 팝업이 차단된 브라우저의 알림 창 표시하기 */
'use strict'

onload = () => {
    let newWin = open('notice.html', 'pop', 'width=500, height=400')
    if (newWin == null) {
        alert('팝업이 차단되어 있습니다. 팝업 차단을 해제해 주세요.')
    }
    newWin.moveBy(100, 100)
}
