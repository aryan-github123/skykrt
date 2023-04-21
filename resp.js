burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
src = document.querySelector('.src')
title = document.querySelector('.v-class')

burger.addEventListener('click', () => {
    src.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    title.classList.toggle('v-class');
})