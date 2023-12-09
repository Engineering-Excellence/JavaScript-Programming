'use strict'

const cup = document.querySelector("#cup");
const smallPics = document.querySelectorAll(".small");

for (const smallPic of smallPics) {
    smallPic.addEventListener("click", changePic);
}

function changePic() {
    let newPic = this.src;
    cup.setAttribute("src", newPic);
}
