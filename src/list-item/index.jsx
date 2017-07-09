import React from 'react';

import { updateTodo } from '../list/list.service';

export class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.todo.text,
      complete: props.todo.complete
    };
  }

  deleteTodo() {
    this.setState((prev, props) => this.props.deleteTodo(props.todo));
  }

  updateTodoStatus(e) {
    this.setState((prev, props) => {
      const newStatus = !prev.complete;

      props.todo.complete = newStatus;
      updateTodo(props.todo);

      return {
        complete: newStatus
      };
    });
  }

  render() {
    const className = this.state.complete ? 'complete' : '';

    return (
      <li>
        <input type='checkbox' className={className} onClick={this.updateTodoStatus.bind(this)} />
        <span className='task-name'>{this.state.text}</span>
        <span className='clear-task' onClick={this.deleteTodo.bind(this)} />
      </li>
    );
  }
}
