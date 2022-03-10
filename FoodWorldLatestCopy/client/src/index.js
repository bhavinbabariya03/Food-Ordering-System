import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/NavBar/Navbar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* <Navbar/> */}
            <App/> 
        </BrowserRouter>
        
    </Provider>,
    document.getElementById('root')
);