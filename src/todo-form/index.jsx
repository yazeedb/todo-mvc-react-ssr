import React from 'react';

import { createTodo } from '../list/list.service';

export class TodoForm extends React.Component {
  submitTodo(e) {
    e.preventDefault();

    const todoValue = this.refs.todoInput.value;

    if (!todoValue) {
      return;
    }

    const newTodo = createTodo(todoValue);

    this.props.appendTodo(newTodo);
    this.refs.todoInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.submitTodo.bind(this)}>
        <span className="toggle-all" onClick={this.props.toggleTodos.bind(this)}/>
        <input ref='todoInput' type='text' placeholder='What needs to be done?' autoFocus='true' />
      </form>
    );
  }
}
