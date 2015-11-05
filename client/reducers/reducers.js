/**
 * @file: web版im reducers
 * @author：wangshiying@zufangit.cn
 */

import * as types from './../actions/actionTypes';

// 初始值
const initState = {
    chatList: [],
    landlordInfo: {},
    tenantInfo: {},
    houseInfo: {}
};

function chat(state = initState, action) {
    switch(action.type) {
        case types.SEND_MSG:
            return state;
        case types.UPDATE_CHART:
            if (action.res && action.res.code === 10000) {
                return {
                    chatList: action.res.chatList,
                    landlordInfo: state.landlordInfo,
                    tenantInfo: state.tenantInfo,
                    houseInfo: state.houseInfo
                };
            }
            else {
                console.log('消息发送失败!');
                return state;
            }
        default:
            return state;
    }
}

module.exports = chat;

