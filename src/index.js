import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { rootReducer } from './reducers';

const router = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(rootReducer, devTools);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
