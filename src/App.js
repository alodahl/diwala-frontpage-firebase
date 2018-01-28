import React from 'react';
import Header from './components/header/Header';
import MainBox from './components/main_box/MainBox';
import NoMatch from './components/no_match/NoMatch';
import News from './components/news/News';
import Team from './components/team/Team';
import Partners from './components/partners/Partners';
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

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainBox}/>
          <Route exact path="/news" component={News}/>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/partners" component={Partners}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default App;
