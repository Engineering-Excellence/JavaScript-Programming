'use strict'

const newRegister = () => {
    let newItem = document.createElement('li')  // 새로운 li 요소 노드를 추가
    let subject = document.querySelector('#subject')    // form의 텍스트 필드를 가져옴
    let newText = document.createTextNode(subject.value)  // 필드값을 텍스트 노드로 추가
    newItem.appendChild(newText)    // 텍스트 노드를 자식 노드로 연결

    let itemList = document.querySelector('#itemList')  // 부모 노드를 가져옴
    // itemList.appendChild(newItem)   // 새로 만든 요소 노드를 부모 노드 마지막에 추가
    itemList.insertBefore(newItem, itemList.childNodes[0])   // 새로 만든 요소 노드를 부모 노드 맨 앞에 추가

    subject.value = ''  // 다음 입력을 위해 텍스트 필드 비우기

    let items = document.querySelectorAll('li') // 모든 항목 가져오기
    for (const item of items) {
        item.addEventListener('click', function () {
            if (this.parentNode) {  // 부모 노드가 존재하면
                this.parentNode.removeChild(this)   // 부모 노드에서 삭제
            }
        })
    }
}
