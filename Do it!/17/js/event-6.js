'use strict'

const cover = document.getElementById("cover");
cover.addEventListener("mouseover", function () {
    cover.src = "../images/easys-2.jpg";
});

cover.addEventListener("mouseout", function () {
    cover.src = "../images/easys-1.jpg";
});
