'use strict';

import './index.html';
import './scss/style.scss';
import { navbar } from './modules/navbar';

const content = document.getElementById('content');

content.appendChild(navbar());
