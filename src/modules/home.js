'use strict';

import heroImgSrc from '../images/food.jpg';

function landingPage() {
  const heroContainer = document.createElement('div');
  const heroWrapper = document.createElement('div', { id: 'homePoop' });
  const heroBody = document.createElement('div');
  const heroFooter = document.createElement('div');
  const heroImage = document.createElement('img');
  const heroButton = document.createElement('a');
  const heroTagline = document.createElement('p');

  heroImage.src = heroImgSrc;
  heroImage.classList.add('hero-image');
  heroButton.href = '#';
  heroButton.innerText = 'Open Menu';
  heroButton.classList.add('hero-btn');
  heroTagline.innerHTML = 'Treat yourself to the best intercontinental dishes. <br /> Stop over';
  heroTagline.classList.add('hero-tagline');
  heroBody.classList.add('hero-body');
  heroFooter.classList.add('hero-footer');
  heroWrapper.classList.add('hero');
  heroContainer.classList.add('container');

  heroBody.appendChild(heroImage);
  heroBody.appendChild(heroButton);
  heroFooter.appendChild(heroTagline);
  heroWrapper.appendChild(heroBody);
  heroWrapper.appendChild(heroFooter);
  heroContainer.appendChild(heroWrapper);

  return heroContainer;
}

export { landingPage }
