import React from 'react';
import { Component } from 'react';

import { ListItem } from '../list-item';
import ListService from './list.service';

export class List extends Component {
  render() {
    const listItems = ListService.getTodos()
      .map((t, index) => <ListItem todo={t} key={index} />);

    return <ul>{listItems}</ul>
  }
};
