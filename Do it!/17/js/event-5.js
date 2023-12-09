'use strict'

const cover = document.getElementById("cover");
cover.addEventListener("mouseover", changePic, false);
cover.addEventListener("mouseout", originPic, false);

function changePic() {
    cover.src = "../images/easys-2.jpg";
}

function originPic() {
    cover.src = "../images/easys-1.jpg";
}
