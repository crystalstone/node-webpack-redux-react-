/**
 * @file: web版im server端
 * @author：wangshiying@zufangit.cn
 */

import Iso from 'iso';
import React from 'react';
import html from './main.html';
import App from './components/App';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import thunk from 'redux-thunk';

/**
 * 渲染模板
 * @param {Object} state 初始数据
 * @param {Object} req request
 * @param {Object} res response
 * @return {string} 模板
 */
const renderToMarkup = (state, req, res) => {

    var buildStore = compose(applyMiddleware(thunk))(createStore);
    var store = buildStore(
        reducers,
        {
            chatList: state.chatList || [],
            landlordInfo: state.landlordInfo || {},
            tenantInfo: state.tenantInfo || {},
            houseInfo: state.houseInfo || {}
        }
    );
    var content = React.renderToString(
        <Provider store={store}>
                {() => <App />}
        </Provider>
    );
    return Iso.render(content, state);
};

export default function render(state, req, res) {
    const markup = renderToMarkup(state, req, res);
    return html.replace('initContent', markup);
};
