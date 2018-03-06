import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './compiled_css/core/styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { browserSupportsAllFeatures, loadScript } from './core/utilities/polyfill.functions';

if (browserSupportsAllFeatures()) {
  main();
} else {
  loadScript('./js/polyfill.min.js', () => main());
}

function main() {
  ReactDOM.render(<App/>, document.getElementById('root'));
  registerServiceWorker();
}