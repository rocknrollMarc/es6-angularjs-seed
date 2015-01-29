var express = require('express');
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();

var port = appEnv.port;
var host = appEnv.bind;
var app = express();



//Directory variables
var DIST_ROOT = __dirname + '/dist';
var BOWER_ROOT = __dirname + '/';
var APP_ROOT = __dirname + '/app';

//Set host and port
app.set('port', port);
app.set('host', host);

//Setup static directory
//app.use(express.static(APP_ROOT));
app.use(express.static(DIST_ROOT));


app.listen(app.get('port'), app.get('host'), function() {
	console.log('Node app is running at:' + host + ':' + port);
});



var cloudServices = null;
var dbcreds = null;


//Test if services
if(process.env.VCAP_SERVICES){
  cloudServices = JSON.parse(process.env.VCAP_SERVICES);
  console.log('[cloud services]', JSON.stringify(cloudServices));
  //var dbcreds = services['mongodb'][0].credentials;
}

if(dbcreds){
  console.log(dbcreds);
  mongoose.connect(dbcreds.host, dbcreds.db, dbcreds.port, {user: dbcreds.username, pass: dbcreds.password});
}

if(process.env.MONGODB_URL){
	console.log("attempting to connect to mongodb", process.env.MONGODB_URL);
  mongoose.connect(process.env.MONGODB_URL);
}
