'use strict'

document.querySelectorAll('.check').forEach(check => {
    check.addEventListener('click', () => {
        const liStyle = check.parentElement.style;
        liStyle.color = '#ccc';
        liStyle.textDecoration = 'line-through';
    });
});
