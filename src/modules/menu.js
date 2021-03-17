import cheeseburger from '../images/menu/cheeseburger.png';
import doubleCheeseburger from '../images/menu/double-cheeseburger.png';
import grilledCheese from '../images/menu/grilled-cheese.png';
import hamburger from '../images/menu/hamburger.png';

class Meal {
  constructor(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

const todayMenu = [
  new Meal('Cheeseburger', 2.59, 'Buns, patty, tomato, onions, lettuce, and secret recipe.', cheeseburger),
  new Meal('Double Cheeseburger', 3.49, 'Cheeseburger, but with extra patty.', doubleCheeseburger),
  new Meal('Grilled Cheese Sandwich', 4.99, 'toasted, grilled cheese sandwich', grilledCheese),
  new Meal('Hamburger', 4.99, 'Buns, patty, tomato, onions, lettuce, and secret recipe.', hamburger)
];

function addToMenu(meal) {
  const listItem = document.createElement('li');
  const img = document.createElement('img');
  const listBody = document.createElement('div');
  const mealTitle = document.createElement('h5');
  const mealDescription = document.createElement('p');
  const mealPrice = document.createElement('h6');

  img.src = meal.image;
  img.classList.add('menu-cover');
  mealTitle.innerText = meal.title;
  mealTitle.classList.add('meal-title');
  mealDescription.innerText = meal.description;
  mealPrice.innerText = `$${meal.price}`;
  mealPrice.classList.add('text-primary', 'meal-price');
  listBody.classList.add('menu-body');
  listBody.appendChild(mealTitle);
  listBody.appendChild(mealDescription);
  listBody.appendChild(mealPrice);
  listItem.classList.add('menu-list-item');
  listItem.appendChild(img);
  listItem.appendChild(listBody);

  return listItem;
}

function menuPage() {
  const menuWrapper = document.createElement('div');
  const paneTitle = document.createElement('h2');
  const menuList = document.createElement('ul');

  todayMenu.forEach(meal => menuList.appendChild(addToMenu(meal)));

  paneTitle.innerText = 'On Our Menu Today';
  paneTitle.classList.add('text-primary');
  menuList.classList.add('menu-list');
  menuWrapper.appendChild(paneTitle);
  menuWrapper.appendChild(menuList);
  menuWrapper.classList.add('menu');
  return menuWrapper;
}

export { menuPage }
