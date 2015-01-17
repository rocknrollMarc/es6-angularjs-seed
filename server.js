var express = require('express');
//var cfenv = require('cfenv');

var port = process.env.PORT || 1337;
var host = process.env.VCAP_APP_HOST || "127.0.0.1";
var app = express();
//var appEnv = cfenv.getAppEnv();
var DIST_ROOT = __dirname + '/dist';
var BOWER_ROOT = __dirname + '/';
var APP_ROOT = __dirname + '/app';

app.set('port', port);
app.set('host', host);

app.use(express.static(APP_ROOT));
app.use(express.static(DIST_ROOT));

app.get('/', function(request, response) {
	response.send('Hello World!');
});

app.listen(app.get('port'), app.get('host'), function() {
	console.log('Node app is running at:' + host + ':' + port);
});

/*
if(process.env.VCAP_SERVICES){
  var services = JSON.parse(process.env.VCAP_SERVICES);
  var dbcreds = services['mongodb'][0].credentials;
}

if(dbcreds){
  console.log(dbcreds);
  mongoose.connect(dbcreds.host, dbcreds.db, dbcreds.port, {user: dbcreds.username, pass: dbcreds.password});
} else {
  //mongoose.connect("127.0.0.1", "myappdb", 27017);
}
console.log("attempting to connect to mongodb");
if(process.env.MONGODB_URL){
  mongoose.connect(process.env.MONGODB_URL);
} else {
//  mongoose.connect("127.0.0.1", "myappdb", 27017);
}*/
