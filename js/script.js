let a = 2; // integer
let b = 1.234; // float
let c = 'jednrgfi neoirgn eoi'; // string
let d = true; // bool
let e = false; // bool
let f = ['drthsert', a, 1, true, [123, '234', []]]; // array
let g = {
    'user': 'vania',
    'digit': 123,
    1: 342,
}; // object

// document.getElementById('id')
// document.getElementsByClassName('.class-name')
// document.getElementsByTagName('img')
// const image = document.querySelector('.hero-block__img')
// const navItems = document.querySelectorAll('.nav__item')
// console.log(navItems);
// for (let i = 0; i < navItems.length; i++) {
//     console.log(navItems[i]);
// }
// image.addEventListener('click', function() {
//     image.style.minWidth = '1500px'
// })
// const func = () => {console.log(1)}
// function func(){
//     console.log(1)
// }
// func()
// if (a == 3){
//     console.log('yes')
// } else {
//     console.log('no')
// }
const images = document.querySelectorAll('.gallery__content > img')

const fullImage = document.querySelector(".image_full_screen > img")
const imageFullScreen = document.querySelector(".image_full_screen")

function showFullScreenImage(image){
    fullImage.src = image.src
    imageFullScreen.style.display = "flex"
}

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (event) {
        showFullScreenImage(images[i])
    })
}
imageFullScreen.addEventListener('click', function(event){
    imageFullScreen.style.display = "none"
}) 



const headerNav = document.querySelector('.header__nav');
const burgerMenu = document.querySelector('.btn__burger_menu');

let flag = 0

burgerMenu.addEventListener('click', function (){
    headerNav.classList.toggle('header__nav-active')
})
