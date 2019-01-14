import React, { Component } from 'react';

class NewTask extends Component {
    constructor(){
      super()
        this.state ={
          userInput: ''
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(value){
      this.setState({userInput: value})
    }
    addTask() {
        this.props.add( this.state.userInput );
        this.setState({ userInput: '' });
      }
    render() {
      return (
        <div className="App">
          <input value={this.state.userInput}
            placeholder='Enter New Task'
            onChange={(e => this.onChange(e.target.value))}
          ></input>
          <button 
            onClick={() => this.addTask()}
        >Add</button>
        </div>
      );
    }
  }
  
  export default NewTask;
  