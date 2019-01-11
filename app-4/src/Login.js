import React, {Component} from 'react'

class Login extends Component {
    constructor(){
        super()
        this.state ={
            input1: '',
            input2: ''
        }
        
    }
    onChange1(e){
        this.setState({input1: e.target.value})
    }
    onChange2(e){
        this.setState({input2: e.target.value})
    }
    onClick(){
        alert('Username: '+this.state.input1+'  Passowrd: '+this.state.input2)
    }

    render() {
      return (
        <div className="App">
            <input placeHolder='Username' onChange={(e) => this.onChange1(e)}></input>
            <input placeHolder='Password' onChange={(e) => this.onChange2(e)}></input>
            <button onClick={() => this.onClick(this.state.input1, this.state.input2)}>Login</button>
        </div>
      );
    }
  }
  
  export default Login;
        