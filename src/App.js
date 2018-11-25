import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './component/Modal/Modal'
import './App.css';

class App extends Component {
  state = {
    showModal : false,
  }

  showModalHandler = () => {
    this.setState(prevState => {
      return {
        showModal : !prevState.showModal
      }
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        {this.state.showModal ? <Modal /> : null}
        <button onClick={this.showModalHandler}>Toggle Modal</button>
      </div>
    );
  }
}

export default App;
