import React from 'react';

import { ListItem } from '../list-item';
import ListService from './list.service';

export class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: props.todos
    };
  }

  deleteTodo(todo) {
    this.setState({
      todos: ListService.deleteTodo(todo)
    });
  }

  render() {
    const listItems = this.state.todos
      .map((t, index) => <ListItem todo={t} key={t.id.toString()} deleteTodo={this.deleteTodo.bind(this)} />);

    return <ul>{listItems}</ul>
  }
};
