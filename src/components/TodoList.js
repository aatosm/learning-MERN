import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  render() {

    let todoItems = this.props.todos.map(todo => {
      return (
        <TodoItem key={todo['_id']} item={todo} />
      );
    })

    return (
      <ul>
        {todoItems}
      </ul>
    );
  }
}

export default TodoList;
