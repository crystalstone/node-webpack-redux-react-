/**
 * Routes
 */

module.exports = function(app) {

    app.post('/sendMsg', function(req, res, next) {
        console.log('senddfsdfsdf');
        console.log('send');
        console.log(req.body);
    });

    app.get('/', function(req, res, next) {
        // 拿到租户和房东的信息
        // 查到聊天记录
        // TODO: 暂定吧……
        res.locals.data =  {
            chatList: [
                {
                    time: '10:39',
                    text: '我要租房',
                    type: 'tenant'
                },
                {
                    time: '10:40',
                    text: '就不租给你',
                    type: 'tenant'
                }
            ],
            landlordInfo: { name: 'landlord', tel: '18611111111' },
            tenantInfo: { name: 'tenantInfo', tel: '18611111111' },
            houseInfo: {houseName: 'xx小区'}
        };
        next();
    });

    app.get('/', function (req, res, next) {
        var App = require('./../../public/assets/app.server.js');
        var html = App(res.locals.data || {}, req, res);
        res.contentType = "text/html; charset=utf8";
        res.end(html);
    });
};
