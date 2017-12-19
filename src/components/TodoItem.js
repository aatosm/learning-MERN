import React, { Component } from 'react';

class TodoItem extends Component {

  render() {

    return (
      <li>
        Task: {this.props.item.task}, Priority: {this.props.item.priority}
      </li>
    );
  }
}

export default TodoItem;
