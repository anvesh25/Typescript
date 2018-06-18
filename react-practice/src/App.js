import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import SingleTodo from "./singleTodo";

class App extends Component 
{
  constructor()
  {
    super();
    this.state = 
    {
      // count:0
      todos:[],
      currentTodo: ""
    };
  }

  // increment = () => {
    // this.setState({
      // count: this.state.count +1
    // });
  // }
  onIbputChange = e => {
    this.setState({currentTodo: e.target.value});
  }

  onClick =() => {
    let todosCopy =this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({ todos: todosCopy, currentTodo: ""});
  }

  deleteTodo = i => {
    let todosCopy=this.state.todos.slice();

    todosCopy.splice(i,1);
    this.setState({todos: todosCopy});
  }

  render() 
  {
    let bulletedtodos = this.state.todos.map((e, i) => {
      return(
        <SingleTodo todo={e} delete ={() => this.deleteTodo(i)} />
      );
    });
    return(
      <div>
        <input placeholder ="Enter todo" value={this.state.currentTodo} 
        onChange={this.onIbputChange} />
        <button onClick={this.onClick}>Add!</button>
        <br />
        {this.state.todos.length === 0 ? "No todos yet!" : <ul>{bulletedtodos}</ul>}
        {/*<button onClick = {this.increment}>Increment</button> */}
        {/*{this.state.count} */}
      </div>
    );
  }
}

export default App;
