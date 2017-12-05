import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { store } from './app/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
