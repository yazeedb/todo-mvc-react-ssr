import React from 'react';

import { ListItem } from '../list-item';
import { deleteTodo } from './list.service';

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteTodo(todo) {
    this.setState({
      todos: deleteTodo(todo)
    });
  }

  render() {
    const listItems = this.props.todos
      .map((t, index) => <ListItem todo={t} key={t.id.toString()} deleteTodo={this.deleteTodo.bind(this)} />);

    return <ul>{listItems}</ul>
  }
};
