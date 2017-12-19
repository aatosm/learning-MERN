import React, { Component } from 'react';

class TodoItem extends Component {

  render() {

    return (
      <li>
        {this.props.item.title}
      </li>
    );
  }
}

export default TodoItem;
