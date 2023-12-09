'use strict'

const pics = document.getElementsByClassName('pic') // pic인 요소를 모두 가져옴
const lightbox = document.getElementById('lightbox')    // lightbox 요소를 가져옴
const lightboxImage = document.getElementById('lightboxImage')  // lightbox 이미지 요소를 가져옴

function showLightbox() {
    let bigLocation = this.getAttribute('data-src') // 섬네일 이미지의 속성값을 가져옴
    lightboxImage.setAttribute('src', bigLocation)  // lightbox의 이미지 경로 수정
    lightbox.style.display = 'block'    // lightbox 이미지를 화면에 표시
}

for (const pic of pics) {
    pic.addEventListener('click', showLightbox) // pics 배열의 i번째 요소를 클릭할 경우 showLightbox() 함수를 실행
}

lightbox.onclick = () => lightbox.style.display = 'none'    // lightbox 요소를 화면에서 감춤
