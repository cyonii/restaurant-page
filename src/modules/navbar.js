'use strict';

function createMenuItem(linkName, active=false) {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a')

  navItem.classList.add('nav-item');
  navLink.href = '#';
  navLink.innerText = linkName;
  navLink.classList.add('nav-link');
  navLink.setAttribute('data-pane', linkName.toLowerCase());

  if (active) navLink.classList.add('active');

  navItem.appendChild(navLink);
  return navItem;
}

function navbar() {
  const navLinks = ['Home', 'Menu', 'Contact'];
  const header = document.createElement('header');
  const navbar = document.createElement('nav');
  const navbarMenu = document.createElement('ul');

  header.classList.add('header');
  navbar.classList.add('navbar', 'container');
  navbarMenu.classList.add('navbar-menu');
  navLinks.forEach((link, index) => {
    let active = false;
    if (index == 0) active = true;
    navbarMenu.appendChild(createMenuItem(link, active));
  });

  navbar.appendChild(navbarMenu);
  header.appendChild(navbar);

  return header;
}

export { navbar }
