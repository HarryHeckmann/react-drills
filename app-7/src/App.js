import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import NewTask from './NewTask'
import List from './List'

class App extends Component {
  constructor(){
    super()
      this.state ={
        list: [],
      }
      this.onClick = this.onClick.bind(this)
  }
  
  onClick(task){
    this.setState({list: [...this.state.list, task]})
    // this.setState({userInput: arr})
  }
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.onClick}/>
        {/* <input 
          placeholder='Enter New Task'
          onChange={(e => this.onChange(e))}
        ></input> */}
        {/* <button 
          onClick={() => this.onClick()}
        >Add</button> */}
        <List list={this.state.list}/>
        {/* <Todo 
          list={this.state.list}
        /> */}
      </div>
    );
  }
}

export default App;
