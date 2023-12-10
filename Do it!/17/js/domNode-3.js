'use strict'

function addContents() {
    let newP = document.createElement("p");
    let txtNode = document.createTextNode("DOM은 Document Object Model의 줄임말입니다.");
    newP.appendChild(txtNode);

    let newImg = document.createElement("img");
    let srcNode = document.createAttribute("src");
    let altNode = document.createAttribute("alt");
    srcNode.value = "../images/dom.jpg";
    altNode.value = "돔 트리 예제 이미지";
    newImg.setAttributeNode(srcNode);
    newImg.setAttributeNode(altNode);

    document.getElementById("info").appendChild(newP);
    document.getElementById("info").appendChild(newImg);
}
