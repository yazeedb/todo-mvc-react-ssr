import React from 'react';

import { isBrowser } from '../platform-util';

function listItem(text) {
  return React.createElement('li', null, text);
}

function List(props) {
  const todos = isBrowser() ? JSON.parse(localStorage.getItem('todos')) : [];

  return React.createElement('ul', {
    children: todos.map(t => listItem(t))
  });
}

export default List;
