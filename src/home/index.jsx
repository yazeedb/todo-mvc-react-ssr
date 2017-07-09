import React from 'react';
import ReactDOM from 'react-dom';

import '../style.scss';

import { List } from '../list';
import { isBrowser } from '../platform-util';
import { getTodos } from '../list/list.service';

export function Home(props) {
  return (
    <div className='container'>
      <input type='text' placeholder='What needs to be done?' autoFocus='true'/>
      <List todos={getTodos()}/>
    </div>
  );
}

if (isBrowser()) {
  const clientContainer = document.getElementById('client-content');
  const serverContainer = document.getElementById('server-content');

  ReactDOM.render(Home(), clientContainer, () => document.body.removeChild(serverContainer));
}
