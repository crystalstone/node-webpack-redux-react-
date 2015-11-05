/**
 * @file: 聊天列表
 * @author：wangshiying@zufangit.cn
 */

import React, { Component, PropTypes } from 'react';
import Tpl from './template.rt';
import './style.less';

export default class ChatList extends Component {

    componentWillMount() {
        var me = this;
        me.setState({
            isLoading: false
        });
    }
    render() {
        return Tpl.apply(this);
    }
}

ChatList.propTypes = {
    chatList: PropTypes.array.isRequired
};
