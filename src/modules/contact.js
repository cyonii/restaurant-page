'use strict';

function contactPage() {
  const contactInfoWrapper = document.createElement('div');

  contactInfoWrapper.classList.add('contact-info');

  [
    '#89b Forest Hill Drive, Loopside, PL 09098',
    'Mon-Thurs:8am-8pm, Fri-Sun:8am-11pm'
  ].forEach((item) => {
    const line = document.createElement('p')
    line.innerText = item;
    contactInfoWrapper.appendChild(line);
  });

  return contactInfoWrapper;
}

export { contactPage }
