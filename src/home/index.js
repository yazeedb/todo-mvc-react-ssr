import '../style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import List from '../list';

import { isBrowser } from '../platform-util';

function Home(props) {
  const title = React.createElement('h1', null, 'todos');

  return React.createElement('div', {
    className: 'container',
    children: [title, List()]
  });
}

if (isBrowser()) {
  const clientContainer = document.getElementById('client-content');
  const serverContainer = document.getElementById('server-content');

  ReactDOM.render(Home(), clientContainer, () => document.body.removeChild(serverContainer));
}

export default Home;
