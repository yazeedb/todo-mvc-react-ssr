import React from 'react';
import ReactDOM from 'react-dom';

import '../style.scss';

import { TodoForm } from '../todo-form';
import { List } from '../list';
import { isBrowser } from '../platform-util';
import { getTodos } from '../list/list.service';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: getTodos()
    };
  }

  respondToChange(newTodos) {
    this.setState({ todos: newTodos }, () => {
      localStorage.setItem('todos', JSON.stringify(newTodos));
    });
  }

  render() {
    return (
      <div className='container'>
        <TodoForm respondToChange={this.respondToChange.bind(this)} />
        <List todos={this.state.todos}/>
      </div>
    );
  }
}

if (isBrowser()) {
  const clientContainer = document.getElementById('client-content');
  const serverContainer = document.getElementById('server-content');

  ReactDOM.render(<Home />, clientContainer, () => document.body.removeChild(serverContainer));
}
