const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    let code = '#';
    for (let i = 0; i <= 5; i++) {
        let number = Math.floor(Math.random() * hex.length);
        code = code + hex[number];
    }
    color.textContent = code;
    document.body.style.backgroundColor = code;
})

