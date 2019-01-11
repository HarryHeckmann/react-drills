import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      array: ['pizza', 'steak', 'tacos', 'ice cream'],
      // filteredArray: [],
      userInput: ''
    }
  }
  onChange(e){
    this.setState({userInput: e})


    // this.setState({array: ['pizza', 'steak', 'tacos', 'ice cream']})
    // console.log(this.state.array)
    // let input = e.target.value
    // let filtered =this.state.array.filter(function(val){
    //   return val.includes(input)
    // })
    // console.log(filtered)
    // console.log(input)
    // this.setState({filteredArray: filtered})
  }
  render() {
    let displayArray = this.state.array.filter((e, i) => {return e.includes(this.state.userInput)}).map((e,i) => {return <h2 key={i}>{e}</h2>})
      return (
        <div className="App">
          <input 
            placeholder='Filter List'
            onChange={(e) => this.onChange(e.target.value)}
          />
          {displayArray}
          {/* <h2>{this.state.filteredArray[0]}</h2>
          <h2>{this.state.filteredArray[1]}</h2>
          <h2>{this.state.filteredArray[2]}</h2>
          <h2>{this.state.filteredArray[3]}</h2> */}
        </div>
      );
  }
}

export default App;