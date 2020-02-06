import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import OutputField from './App';

ReactDOM.render(<OutputField />, document.getElementById('root'));


serviceWorker.unregister();