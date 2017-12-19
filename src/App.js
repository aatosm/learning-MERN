import React, { Component } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddItem from './components/AddItem';

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos: [],
      priorities: ['low', 'medium', 'high']
    }
    this.loadTodosFromServer = this.loadTodosFromServer.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }


  loadTodosFromServer(){
    axios.get(this.props.url)
      .then(res => {
        this.setState({
          todos: res.data
        });
      })
  }


  componentDidMount(){
    this.loadTodosFromServer();
    setInterval(this.loadTodosFromServer, this.props.pollInterval);
  }


  addTodo(todo){
    axios.post(this.props.url, todo)
      .then(res =>
        axios.get(this.props.url)
          .then(res => this.setState({
            todos: res.data
          }))
      )
  }


  render() {

    return (
      <div className="App">
        <AddItem priorities={this.state.priorities} addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
