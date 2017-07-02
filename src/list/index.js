import { createElement as $ } from 'react';

import ListItemComponent from '../list-item';
import ListService from './list.service';

function List(props) {
  const todos = ListService.getTodos();
  const listItems = todos.map((t, index) => $(ListItemComponent, { todo: t, key: index }));

  return $('ul', { children: listItems });
}

export default List;
