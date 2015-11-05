/**
 * @file: 发送消息
 * @author：wangshiying@zufangit.cn
 */

import React, { Component, PropTypes } from 'react';
import Tpl from './template.rt';
import './style.less';

export default class ChatList extends Component {

    componentWillMount() {

    }

    sendMsg() {
        var msg = '测试数据……';
        if (msg) {
            this.props.sendMsg(msg);
        }
    }

    render() {
        return Tpl.apply(this);
    }
}

ChatList.propTypes = {
    chatList: PropTypes.array.isRequired,
    sendMsg: PropTypes.array.sendMsg,
};
