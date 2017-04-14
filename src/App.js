import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css'
const sentiment = require('sentiment')


class App extends Component {
  constructor() {
  	super()
  	this.state = {
  		score: 0,
  		comparative: 0,
  		positive: [],
  		negative: []
  	}
  }
  analysis() {
  	let msg = document.querySelector(`#msg`)
  	let s = sentiment(msg.value)
  	//console.log(s)
  	this.setState({
  		score: s.score,
  		comparative: s.comparative,
  		positive: s.positive,
  		negative: s.negative
  	})
  }
  render() {
    //let r1 = sentiment('Cats are stupid.');
    return (
      <div className="App">
      	<input type="text" onChange={this.analysis.bind(this)} id="msg"/>
      	<button onClick={this.analysis.bind(this)}>Send</button>
      	<br/>
        <p>Score: {this.state.score}</p>
        <p>Comparative: {this.state.comparative}</p>
        <h2 style={{color:'#fdd835'}}>☺️</h2>
        <ul>
        	{this.state.positive.map( w => <li key={w}>{w}</li> )}
        </ul>
        <h2 style={{color:'#dd2c00'}}>☹️</h2>
        <ul>
        	{this.state.negative.map( w => <li key={w}>{w}</li> )}
        </ul>
      </div>
    )
  }
}

export default App
