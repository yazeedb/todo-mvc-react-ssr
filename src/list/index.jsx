import React from 'react';

import { ListItem } from '../list-item';
import { deleteTodo } from './list.service';

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listItems = this.props.todos
      .map((t, index) => (
        <ListItem
          todo={t}
          key={t.id.toString()}
          updateTodo={this.props.updateTodo}
          deleteTodo={this.props.deleteTodo}
        />
      ));

    return <ul>{listItems}</ul>
  }
};
