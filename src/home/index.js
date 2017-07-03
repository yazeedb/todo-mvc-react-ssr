import '../style.scss';

import { createElement as $ } from 'react';
import ReactDOM from 'react-dom';

import List from '../list';

import { isBrowser } from '../platform-util';

function Home(props) {
  const input = $('input', {
    placeholder: 'What needs to be done?',
    autoFocus: true,
    type: 'text'
  });

  return $('div', {
    className: 'container',
    children: [input, $(List)]
  });
}

if (isBrowser()) {
  const clientContainer = document.getElementById('client-content');
  const serverContainer = document.getElementById('server-content');

  ReactDOM.render(Home(), clientContainer, () => document.body.removeChild(serverContainer));
}

export default Home;
