const colors = ["green", '#fed232', 'rgba(132,143,123)'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')
btn.addEventListener('click', function () {
    color.textContent = colors[getRandom()];
    document.body.style.backgroundColor = colors[getRandom()];
})

function getRandom() {
    return Math.floor(Math.random() * colors.length);
}