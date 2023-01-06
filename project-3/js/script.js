const reviews = [{
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambrey pop -up. shanan humblebrag pickled coloring book salvia hoodie. cold-pressed for doller toast everyday carry",
}, {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
}, {
    id: 3,
    name: "peter parker",
    job: "intern",
    img: "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=400",
    text: " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
}, {
    id: 4,
    name: "Ravinder Chautala",
    job: "The boss",
    img: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
    text: "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.",
},]

// select items

const img = document.getElementById('person-img');
const auther = document.getElementById('auther');
const role = document.getElementById('role');
const info = document.getElementById('info');

const prevbtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
const randombtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
})

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    auther.textContent = item.name;
    role.textContent = item.job;
    info.textContent = item.text;
}

// show previous person
prevbtn.addEventListener('click', function () {
    if (currentItem === 0) {
        currentItem = reviews.length - 1;
    } else {
        currentItem--;
    }
    showPerson(currentItem);
})

// show next person
nextbtn.addEventListener('click', function () {
    if (currentItem === reviews.length - 1) {
        currentItem = 0;
    } else {
        currentItem++;
    }
    showPerson(currentItem);
})

// show random person
randombtn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * reviews.length);
    showPerson(random);
})