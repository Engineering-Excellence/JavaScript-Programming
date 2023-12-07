/* 사이트 위치 고정하기 */
'use strict'

onload = () => {
    document.write(`<div id="display"><p><b>location.href:</b> ${location.href}</p>`)
    document.write(`<p><b>location.host:</b> ${location.host}</p>`)
    document.write(`<p><b>location.protocol:</b> ${location.protocol}</p></div>`)
    document.write(`<button id="replace">페이지 이동</button>`)
    document.querySelector('#replace').onclick = () => location.replace('https://github.com/Engineering-Excellence')
}
