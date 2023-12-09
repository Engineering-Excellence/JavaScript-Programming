'use strict'

const cup = document.getElementById("cup");
cup.onclick = function () {
    alert("클릭한 이미지 파일 : " + this.src);
}
