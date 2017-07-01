import { createElement as $ } from 'react';

import { isBrowser } from '../platform-util';

function listItem(text) {
  const checkbox = $('input', { type: 'checkbox' });
  const clearTask = $('span', { className: 'clear-task' });
  const textContainer = $('span', {
    className: 'task-name',
    children: text
  });

  return $('li', {
    children: [checkbox, clearTask, textContainer]
  });
}

function List(props) {
  const todos = isBrowser() ? JSON.parse(localStorage.getItem('todos')) : [];

  return $('ul', {
    children: todos.map(t => listItem(t))
  });
}

export default List;
