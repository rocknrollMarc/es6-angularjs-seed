var express = require('express');
var cfenv = require('cfenv');
var app = express();
var appEnv = cfenv.getAppEnv();
var DIST_ROOT = __dirname + '/dist'
var BOWER_ROOT = __dirname + '/';
var APP_ROOT = __dirname + '/app';

app.set('port', appEnv.port);
app.set('host', appEnv.bind);
 
app.use(express.static(DIST_ROOT));

app.get('/', function(request, response) {
	response.send('Hello World!');
});

app.listen(app.get('port'), app.get('host'), function() {
	console.log('Node app is running at:' + appEnv.url);
});
