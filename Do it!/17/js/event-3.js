'use strict'

const cup = document.querySelector("#cup");  // id = cup인 요소를 가져옴
cup.onclick = function (event) {
    alert("이벤트 유형: " + event.type + ", 이벤트 발생 위치 : " + event.pageX + "," + event.pageY);
}
