import home from './home';
import menu from './menu';
import contact from './contact';

const title = document.createElement('h1');
const titleWrapper = document.createElement('div');
const nav = document.createElement('nav');
const list = document.createElement('ul');
const homeLink = document.createElement('a');
const menuLink = document.createElement('a');
const contactLink = document.createElement('a');
const content = document.getElementById('content');
const footer = document.createElement('footer');
const links = [homeLink, menuLink, contactLink];
const main = document.createElement('main');
footer.innerHTML = "Copyright © 2021 Knacko Taco"
title.innerHTML = 'Knacko Taco';
content.appendChild(titleWrapper);
titleWrapper.setAttribute('id', 'title-wrapper');
titleWrapper.appendChild(title);
main.setAttribute('id', 'main');
content.appendChild(nav);
nav.appendChild(list);
for (let i = 0; i < links.length; i++) {
    list.appendChild(links[i]);
}
content.appendChild(main);
content.appendChild(footer);
homeLink.textContent = "Home";
menuLink.textContent = "Menu";
contactLink.textContent = "Contact";

home();

homeLink.addEventListener('click', () => {
    main.innerHTML = '';
    home();
});
menuLink.addEventListener('click', () => {
    main.innerHTML = '';
    menu();
});
contactLink.addEventListener('click', () => {
    main.innerHTML = '';
    contact();
});