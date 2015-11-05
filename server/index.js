/**
 * @file: 主入口
 */

var express = require('express');
var http = require('http');
var routers = require('./router/index');
var app = new express();
var Path = require('path');
var bodyParser = require('body-parser');

/*var AV = require('avoscloud-sdk');
AV.initialize('3kmbflgtixvca8ndi1hbg9zbs3a8tq36dhk0vivto744fgvl',
    'm3utieskj7aizu5yxd6vuxej3mysl9n97lum56q62tnqjkk1');*/
/*var AV = require('leanengine');
AV.initialize(
    '3kmbflgtixvca8ndi1hbg9zbs3a8tq36dhk0vivto744fgvl',
    'm3utieskj7aizu5yxd6vuxej3mysl9n97lum56q62tnqjkk1',
    'gsh11o5uncme56d1uxbfgqw0zdjrzhm5h6rqgfpf1r4xdpd4'
);*/

/**
 * 格式化端口号
 * @param {number} val
 * @return {boolean||number}
 */
function normalizePort (val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

// TODO: hot 现在处理的不好……
if (process.env.NODE_ENV === 'hot') {
    require('./wpCompiler')(app);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
app.use(express.static(Path.join(__dirname, '../public')));
routers(app);
var server = http.createServer(app);
server.listen(port);
server.on('error', function () {
    // TODO: log4js
    console.log('error');
});
