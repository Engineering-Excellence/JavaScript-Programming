'use strict'

let memNum = parseInt(prompt('입장객은 몇 명인가요?'))
let colNum = parseInt(prompt('한 줄에 몇 명씩 앉습니까?'))
let rowNum = Math.ceil(memNum / colNum)

document.write('<table>')
for (let i = 0; i < rowNum; i++) {
    document.write('<tr>')
    for (let j = 1; j < colNum + 1; j++) {
        let seatNo = i * colNum + j // 좌석번호
        if (seatNo > memNum) break
        document.write(`<td> 좌석 ${seatNo.toString().padStart(2, ' ')}</td>`)
    }
    document.write('</tr>')
}
document.write('</table>')
