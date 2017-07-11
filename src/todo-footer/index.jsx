import React from 'react';

export class TodoFooter extends React.Component {
  calculateItemsLeft() {
    return this.props.todos.filter(t => !t.complete).length;
  }

  render() {
    const itemsLeft = this.calculateItemsLeft();

    return (
      <footer>
        <span>{itemsLeft} item{itemsLeft !== 1 ? 's' : ''} left</span>
      </footer>
    );
  }
}
