const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-list');

menu.addEventListener('click', () => {
    menuNav.classList.toggle('active')
})

// switch teme 

const bSwitch = document.querySelector('.switch');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const menuList =document.querySelectorAll('a');
const sectionLi = document.querySelectorAll('li');
const p = document.querySelectorAll('p');
const code = document.querySelectorAll('code');

bSwitch.addEventListener('click', () => {
    bSwitch.classList.toggle('active');
    nav.classList.toggle('dark');
    main.classList.toggle('dark');

    menuList.forEach(list => {
        list.classList.toggle('dark');
    })

    sectionLi.forEach( li => {
        li.classList.toggle('dark');
    })

    p.forEach(p => {
        p.classList.toggle('dark');
    })

    code.forEach(code => {
        code.classList.toggle('dark');
    })
})
