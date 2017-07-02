import { Component, createElement as $ } from 'react';

import ListService from '../list/list.service';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.todo.text,
      complete: props.todo.complete
    };
  }

  render() {
    const checkbox = $('input', {
      type: 'checkbox',
      className: this.state.complete ? 'complete' : '',
      onClick: (e) => {
        this.setState((prev, props) => {
          const newStatus = !prev.complete;

          props.todo.complete = newStatus;
          ListService.updateTodo(props.todo);

          return {
            complete: newStatus
          };
        });
      }
    });

    const textContainer = $('span', { className: 'task-name', children: this.state.text });
    const clearTask = $('span', { className: 'clear-task' });

    return $('li', { children: [checkbox, textContainer, clearTask] });
  }
}

export default ListItem;
