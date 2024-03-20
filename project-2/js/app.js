const number = document.querySelector('.number');
let count = 0;

const btns = document.querySelectorAll('.btn');


// method-1

// btns[0].addEventListener('click', function () {
//     count--;
//     number.textContent = count;
//     number.style.color = 'red';
// });
// btns[1].addEventListener('click', function () {
//     count = 0;
//     number.textContent = count;
//     number.style.color = 'black';
// });
// btns[2].addEventListener('click', function () {
//     count++;
//     number.textContent = count;
//     number.style.color = 'blue';
// });


// method-2

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if (count === 0) {
            number.style.color = "black";
        }
        else if (count > 0) {
            number.style.color = "blue";
        }
        else {
            number.style.color = "red";
        }
        number.textContent = count;
    })
})