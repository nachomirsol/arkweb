import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px",background:'cornflowerblue'}}>
          <Header/>
      </div>
    );
  }
}

export default App;
