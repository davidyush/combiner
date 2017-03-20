import React, { Component } from 'react';

import Header from './components/Header'
import Options from './components/Options'
import Rules from './components/Rules'

class App extends Component {
  render() {
    return (
      <main className='main'>
        <Header/>
        <div className='container main-container'>
          <Rules/>
          <div className='quiz'>
            <div className='titles'>
              <h2>Choose your destiny</h2>
            </div>
            <div className='content'>
              <Options/>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
