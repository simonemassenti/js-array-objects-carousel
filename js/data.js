/*****************************/
//Arrow Functions
const createImageString = (i) => `
    <img src="${images[i].image}" alt="${images[i].title}">
    <h2 class="title">${images[i].title}</h2>
    <h4 class="text">${images[i].text}</h4>`;

/*********************************/
//Main Program

//Images Array
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const displayerImageElem = document.getElementById("main-img");
let index = 0;
let imageString = createImageString(index);

displayerImageElem.innerHTML = imageString;
const asideItemElem = document.querySelectorAll(".aside-item");
asideItemElem[index].classList.add("active");

const nextElem = document.querySelector(".next");
const prevElem = document.querySelector(".prev");

//nextElem.addEventListener("click", nextImage);
setInterval(nextImage, 3000);
//prevElem.addEventListener("click", previousImage);


/****************************/
//Functions
function nextImage() {
    asideItemElem[index].classList.remove("active");

    index < images.length - 1 ? index++ : index = 0;
    console.log(index);
    asideItemElem[index].classList.add("active");

    imageString = createImageString(index);

    displayerImageElem.innerHTML = imageString;
}

function previousImage() {
    asideItemElem[index].classList.remove("active");

    index > 0 ? index-- : index = images.length - 1;

    asideItemElem[index].classList.add("active");

    imageString = createImageString(index);

    displayerImageElem.innerHTML = imageString;
}