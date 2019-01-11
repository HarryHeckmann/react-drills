import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  constructor(){
    super()
    this.state = {
      picture: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Easy_Steak_Frites-LEDE.jpg?itok=IdQsXmBP'
    }
  }
  render() {
    return (
      <div className="App">
        <Image image={this.state.picture}/>
      </div>
    );
  }
}

export default App;
