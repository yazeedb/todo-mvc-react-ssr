import React from 'react';
import ReactDOM from 'react-dom';

import '../style.scss';

import { TodoForm } from '../todo-form';
import { List } from '../list';
import { updateTodo, deleteTodo } from '../list/list.service';
import { isBrowser } from '../platform-util';
import { getTodos } from '../list/list.service';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: getTodos()
    };
  }

  appendTodo(newTodo) {
    const todoList = this.state.todos;

    todoList.push(newTodo);
    this.saveTodos(todoList);
  }

  updateTodo(todo) {
    const todoList = this.state.todos;

    updateTodo(todoList, todo);
    this.saveTodos(todoList);
  }

  deleteTodo(todo) {
    const todoList = this.state.todos;

    deleteTodo(todoList, todo);
    this.saveTodos(todoList);
  }

  saveTodos(todoList) {
    this.setState({ todos: todoList }, () => {
      localStorage.setItem('todos', JSON.stringify(todoList));
    });
  }

  render() {
    return (
      <div className='container'>
        <TodoForm appendTodo={this.appendTodo.bind(this)} />
        <List todos={this.state.todos} updateTodo={this.updateTodo.bind(this)} deleteTodo={this.deleteTodo.bind(this)}/>
      </div>
    );
  }
}

if (isBrowser()) {
  const clientContainer = document.getElementById('client-content');
  const serverContainer = document.getElementById('server-content');

  ReactDOM.render(<Home />, clientContainer, () => document.body.removeChild(serverContainer));
}
