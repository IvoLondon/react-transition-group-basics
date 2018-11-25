import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './component/Modal/Modal'
import Transition from 'react-transition-group/Transition'
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
        <Transition 
          in={this.state.showModal} 
          timeout={2000}
          mountOnEnter
          unmountOnExit>
          {state => (
            
            <Modal mode={state === 'exiting' ? 'ModalExit' : 'ModalEnter'} />
          )}
        </Transition>
        <button onClick={this.showModalHandler}>Toggle Modal</button>
      </div>
    );
  }
}

export default App;
