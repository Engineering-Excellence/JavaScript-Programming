'use strict'

const openCenter = (doc, win, w, h) => {
    let left = (screen.availWidth - w) / 2
    let top = (screen.availHeight - h) / 2
    let opt = `left=${left},top=${top},width=${w},height=${h}`
    window.open(doc, win, opt)
}

openCenter('notice.html', 'pop', 500, 400)
