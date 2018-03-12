import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './compiled_css/core/styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
