import React, { Component } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos: []
    }
    this.loadTodosFromServer = this.loadTodosFromServer.bind(this);
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

  render() {

    return (
      <div className="App">
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
