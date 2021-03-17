export default function contactPage() {
  const contactInfoWrapper = document.createElement('div');
  const contactInfo = [
    ['Location', '#89b Forest Hill Drive, Loopside, PL 09098'],
    ['Opening Hours', 'Mon-Thurs:8am-8pm, Fri-Sun:8am-11pm'],
  ]

  contactInfoWrapper.classList.add('contact-info');

  contactInfo.forEach((info) => {
    const row = document.createElement('p');
    const label = document.createElement('span');
    const data = document.createTextNode(info[1]);

    label.classList.add('label');
    [label.innerText] = info;
    row.appendChild(label);
    row.appendChild(data);
    contactInfoWrapper.appendChild(row);
  });

  return contactInfoWrapper;
}
