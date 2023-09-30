'use strict'

for (let i = 2; i < 10; i++) {
    document.write(`<div><h3>${i}단</h3>`)
    for (let j = 2; j < 10; j++) {
        document.write(`${i} × ${j} = ${i * j}<br>`)
    }
    document.write('</div>')
}