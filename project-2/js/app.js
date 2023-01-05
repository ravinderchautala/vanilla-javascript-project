const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
let count = 0;

// method-1
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const list = e.currentTarget.classList;
        if (list.contains("decrease")) {
            count--;
        } else if (list.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'blue';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = 'black';
        }
        value.textContent = count;
    });
});

// method-2

const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

// decrease.addEventListener('click', function () {
//     count--;
//     value.textContent = count;
//     if (count > 0) {
//         value.style.color = 'blue';
//     } else if (count < 0) {
//         value.style.color = 'red';
//     } else {
//         value.style.color = 'black';
//     }
// })
// reset.addEventListener('click', function () {
//     count = 0;
//     value.textContent = count;
//     value.style.color = 'black';
// })
// increase.addEventListener('click', function () {
//     count++;
//     value.textContent = count;
//     if (count > 0) {
//         value.style.color = 'blue';
//     } else if (count < 0) {
//         value.style.color = 'red';
//     } else {
//         value.style.color = 'black';
//     }
// })
