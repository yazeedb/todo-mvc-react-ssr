import React from 'react';

import { updateTodo } from '../list/list.service';

export class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  updateTodo() {
    const todo = this.props.todo;

    todo.complete = !todo.complete;
    this.props.updateTodo(todo);
  }

  render() {
    const todo = this.props.todo;
    const className = todo.complete ? 'complete' : '';

    return (
      <li className={className}>
        <input type='checkbox' onClick={this.updateTodo.bind(this)} />
        <span className='task-name'>{todo.text}</span>
        <span className='clear-task' onClick={this.props.deleteTodo.bind(this, todo)} />
      </li>
    );
  }
}
