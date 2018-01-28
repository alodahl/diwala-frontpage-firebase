import React, { Component } from 'react';
import Header from './components/header/Header';
import MainBox from './components/main_box/MainBox';
import NoMatch from './components/no_match/NoMatch';
import News from './components/news/News';
import './compiled_css/App.css';
import './compiled_css/fonts/font-faces.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { diwalaFrontpageApp } from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(diwalaFrontpageApp);

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

const BasicExample = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainBox}/>
          <Route exact path="/news" component={News}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default BasicExample;
