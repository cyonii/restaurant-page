import './index.html';
import './scss/style.scss';
import navbar from './modules/navbar';
import landingPage from './modules/home';
import menuPage from './modules/menu';
import contactPage from './modules/contact';

const content = document.getElementById('content');
const contentInner = document.createElement('div');
const pane = {
  home: landingPage,
  menu: menuPage,
  contact: contactPage,
};

content.appendChild(navbar());
contentInner.setAttribute('id', 'content-inner');
contentInner.appendChild(landingPage());
content.appendChild(contentInner);

const navLinks = document.querySelectorAll('[data-pane]');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.currentTarget.classList.contains('active')) return;

    const activeLink = document.querySelector('.nav-link.active');
    const currentPane = pane[event.currentTarget.getAttribute('data-pane')];

    activeLink.classList.remove('active');
    event.currentTarget.classList.add('active');
    contentInner.innerHTML = '';
    contentInner.appendChild(currentPane());
  });
});
