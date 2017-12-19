import React, { Component } from 'react';

class AddItem extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let newTodo = {
      task: this.refs.task.value,
      priority: this.refs.priority.value,
      completed: false
    }
    this.props.addTodo(newTodo);
  }

  render() {

    let options = this.props.priorities.map(p => {
      return <option key={p}>{p}</option>
    })

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add new task with priority</label><br/>
        <input type="text" ref="task"/>
        <select ref="priority">
          {options}
        </select><br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddItem;
