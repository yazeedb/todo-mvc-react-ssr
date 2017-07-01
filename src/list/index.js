import { createElement as $ } from 'react';

import { isBrowser } from '../platform-util';

import ListItemComponent from '../list-item';

function List(props) {
  const todos = isBrowser() ? JSON.parse(localStorage.getItem('todos')) : [];
  const listItems = todos.map((t, index) => $(ListItemComponent, { todo: t, key: index }));

  return $('ul', { children: listItems });
}

export default List;
