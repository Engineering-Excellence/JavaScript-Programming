'use strict'

const cup = document.querySelector("#cup");  // id = cup인 요소를 가져옴
cup.onclick = changePic;  // cup을 클릭하면 changePic 함수 실행

function changePic() {
    cup.src = "../images/cup-2.png";
}
