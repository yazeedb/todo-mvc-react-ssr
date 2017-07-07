import React from 'react';
import { Component } from 'react';

import ListItemComponent from '../list-item';
import ListService from './list.service';

export class List extends Component {
  render() {
    const listItems = ListService.getTodos()
      .map((t, index) => <ListItemComponent todo={t} key={index} />);

    return <ul>{listItems}</ul>
  }
};
