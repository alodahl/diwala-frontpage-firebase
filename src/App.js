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

import Velocity from 'velocity-animate';

import { diwalaFrontpageApp } from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(diwalaFrontpageApp);

const handleClick = () => {
  console.log("sadasda")
  console.log(document.getElementById("App2"))
  console.log(document.body)
  Velocity(document.getElementById("App2"), "scroll", { duration: 2500})
}

window.onscroll = function (e) {
  if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
      Velocity(document.getElementById("App2"), "scroll", { duration: 2000})
  }

}

const App = () => (
  <Provider store={store}>
    <Router>
    <div>
      <div className="App" onClick={handleClick}>
        <Header/>
        <Switch>
          <Route exact path="/" component={MainBox}/>
          <Route exact path="/news" component={News}/>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/partners" component={Partners}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
      <div className="App2" id="App2">
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
        <div>Page2</div>
      </div>
    </div>
    </Router>
  </Provider>
)

export default App;
