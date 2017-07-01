import { Component, createElement as $ } from 'react';

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
          const nowComplete = !prev.complete;

          props.todo.complete = nowComplete;

          return {
            complete: nowComplete
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
