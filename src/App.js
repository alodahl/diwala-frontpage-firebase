import React, { Component } from 'react';
import Header from './components/header/Header';
import MainBox from './components/main_box/MainBox';
import './compiled_css/App.css';
import './compiled_css/fonts/font-faces.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainBox />
      </div>
    );
  }
}

export default App;
