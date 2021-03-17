'use strict';

class MenuItem {
  constructor(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

function menuPage() {
  const menuWrapper = document.createElement('div');

  menuWrapper.innerHTML = 'Menu Menu';
  return menuWrapper;
}

export { menuPage }
