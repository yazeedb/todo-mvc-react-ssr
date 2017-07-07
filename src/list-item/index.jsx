import React from 'react';

import ListService from '../list/list.service';

export class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.todo.text,
      complete: props.todo.complete
    };
  }

  updateTodoStatus(e) {
    this.setState((prev, props) => {
      const newStatus = !prev.complete;

      props.todo.complete = newStatus;
      ListService.updateTodo(props.todo);

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
        <span className='clear-task' />
      </li>
    );
  }
}
