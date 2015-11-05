/**
 * @file: web版im 主入口
 * @author：wangshiying@zufangit.cn
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../actions/actions';
import List from './list/list';
import SendMsg from './sendMsg/sendMsg';

class App extends Component {

    componentWillMount() {}

    render() {
        const {chatList, actions, landlordInfo, tenantInfo, houseInfo} = this.props;
        return (
            <div className="container row">
                <div className="col-4">
                    房东：{landlordInfo.name}
                    租客：{tenantInfo.name}
                    小区名字：{houseInfo.houseName}
                </div>
                <div>
                    <List
                        chatList = {chatList}
                    />
                    <SendMsg sendMsg={actions.sendMsgSync} />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    chatList: PropTypes.array.isRequired,
    landlordInfo: PropTypes.object.isRequired,
    tenantInfo: PropTypes.object.isRequired,
    houseInfo: PropTypes.object.isRequired
};

export default connect(
    state => ({
        chatList: state.chatList,
        landlordInfo: state.landlordInfo,
        tenantInfo: state.tenantInfo,
        houseInfo: state.houseInfo
    }),
    dispatch => ({
        actions: bindActionCreators(Actions, dispatch)
    })
)(App);

