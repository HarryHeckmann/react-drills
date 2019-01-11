import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()
      this.state ={
        list: [],
        userInput: ''
      }
      this.onChange = this.onChange.bind(this)
      this.onClick = this.onClick.bind(this)
  }
  onChange(e){
    this.setState({userInput: e.target.value})
  }
  onClick(){
    let arr = this.state.list
    arr.push(this.state.userInput)
    console.log(arr)
    this.setState({userInput: arr})
  }
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input 
          placeholder='Enter New Task'
          onChange={(e => this.onChange(e))}
        ></input>
        <button 
          onClick={() => this.onClick()}
        >Add</button>
        <Todo 
          list={this.state.list}
          click={() => this.onClick()}
        />
      </div>
    );
  }
}

export default App;
