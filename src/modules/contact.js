'use strict';

function contactPage() {
  const contactInfoWrapper = document.createElement('div');

  contactInfoWrapper.classList.add('contact-info');

  [
    ['Location', '#89b Forest Hill Drive, Loopside, PL 09098'],
    ['Opening Hours', 'Mon-Thurs:8am-8pm, Fri-Sun:8am-11pm']
  ].forEach((item) => {
    const row = document.createElement('p');
    const label = document.createElement('span');
    const data = document.createTextNode(item[1]);

    label.classList.add('label');
    label.innerText = item[0];
    row.appendChild(label);
    row.appendChild(data);
    contactInfoWrapper.appendChild(row);
  });

  return contactInfoWrapper;
}

export { contactPage }
