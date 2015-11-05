/*
 * @file: web版im client端
 * @author：wangshiying@zufangit.cn
 */


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/reducers';
import Iso from 'iso';

const initialState = window.__INITIAL_STATE__;
const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

Iso.bootstrap(function (state, meta, node) {
    const store = createStoreWithMiddleware(reducers, state);
    const rootElement = document.getElementById('app');
    React.render(
        <Provider store={store}>
            {() => <App />}
        </Provider>,
        rootElement
    );
});

