
var webpack = require('webpack');
var config = require('./../wpConfig/wp');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var exec = require('child_process').exec;

module.exports = function(app) {
    console.log('开始编译……')
    exec('npm run buildHotLoader', function (err, stdout, stderr) {
        console.log(stdout);

        if (err) {
            console.log(err.toString());
        }
        else {
            console.log('ok');
        }
    });

    /*webpack(config, function(err, stats) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('编译完成……')
        }
    });*/

    /*var compiler = webpack(config);
    compiler.run(function(err, stats) {
        console.log('run');
        if (err) {
            console.log('run-err');
            console.log(err);
        }
    });
    compiler.watch(
        { // watch options:
            aggregateTimeout: 300, // wait so long for more changes
            poll: true // use polling instead of native watchers
        },
        function(err, stats) {
            console.log('watch');
            if (err) {
                console.log('watch---error');
                console.log(err);
            }
        }
    );*/
};
