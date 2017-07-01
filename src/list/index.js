import { createElement as $ } from 'react';

import { isBrowser } from '../platform-util';

function listItem(text) {
  const checkbox = $('input', { type: 'checkbox' });
  const textContainer = $('span', {
    className: 'task-name',
    children: text
  });
  const clearTask = $('span', { className: 'clear-task' });

  return $('li', {
    children: [checkbox, textContainer, clearTask]
  });
}

function List(props) {
  const todos = isBrowser() ? JSON.parse(localStorage.getItem('todos')) : [];

  return $('ul', {
    children: todos.map(t => listItem(t))
  });
}

export default List;
