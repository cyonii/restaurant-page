'use strict';

import './index.html';
import './scss/style.scss';
import { navbar } from './modules/navbar';
import { landingPage } from './modules/home';

const content = document.getElementById('content');

content.appendChild(navbar());
content.appendChild(landingPage());
