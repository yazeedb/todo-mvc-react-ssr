import React from 'react';
import { Component, createElement as $ } from 'react';

import ListItemComponent from '../list-item';
import ListService from './list.service';

class List extends Component {
  render() {
    const listItems = ListService.getTodos()
      .map((t, index) => <ListItemComponent todo={t} key={index} />);

    return <ul>{listItems}</ul>
  }
};

export default List;
