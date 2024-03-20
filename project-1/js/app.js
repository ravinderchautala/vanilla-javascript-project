const colors = ['red', 'green', 'yellow', 'blue', '#C2B8B2', 'rgba(133,122,200)', '#204B57'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    let number = Math.floor(Math.random() * 7);
    color.textContent = colors[number];
    document.body.style.backgroundColor = colors[number];
    color.style.color = colors[number];
})