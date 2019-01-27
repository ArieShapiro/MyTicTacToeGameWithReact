import React, { Component } from 'react';
import './css/App.css';
import Board from './Board'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      boardStatus: Array(9).fill(null)

    }
  }
   
  // componentDidMount() {
  //   console.log(this.state.boardStatus)
  // }
  render() {
    return (
      <div className="App">
        <h1>Hello App</h1>

      </div>
    );
  }
}

export default App;
