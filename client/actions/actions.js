/**
 * @file: web版im-actions
 * @auth: wangshiying@zufangit.cn
 */
import * as types from './actionTypes';


/**
 * 发送消息 - action
 * @return {object} action
 */
export function sendMsgSync(msg) {
    return dispatch => {
        $.ajax({
            type: 'POST',
            url: '/sendMsg',
            data: { msg: msg },
            dataType: 'json',
            timeout: 300,
            context: $('body'),
            success: function(data) {
                dispatch(filter(data));
            },
            error: function(xhr, type){
                alert('Ajax error!')
            }
        });
    };
}

export function sendMsg(res) {
    return {
        type: types.UPDATE_CHART,
        res: res
    }
}











