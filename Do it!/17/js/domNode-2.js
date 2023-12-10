'use strict'

function addP() {
    let newP = document.createElement("p");
    let txtNode = document.createTextNode("DOM은 Document Object Model의 줄임말입니다.");
    newP.appendChild(txtNode);
    document.getElementById("info").appendChild(newP);
}
