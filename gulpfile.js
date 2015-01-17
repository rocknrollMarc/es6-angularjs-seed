//Task plugins
var gulp = require('gulp');
var traceur = require('gulp-traceur');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rimraf = require('gulp-rimraf');
var gulpTraceurCmdline = require('gulp-traceur-cmdline');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');


var config = {
	app: 'app/',
	dist: 'dist/'
};

//Task variables
var EXPRESS_PORT = 4000;
var DIST_ROOT = __dirname + '/dist'
var BOWER_ROOT = __dirname + '/';
var EXPRESS_ROOT = __dirname + '/app';
var LIVERELOAD_PORT = 35729;
var lr;

function startExpress() {
	var express = require('express');
	var app = express();
	app.use(require('connect-livereload')());
	
	app.use(express.static(EXPRESS_ROOT));
	app.listen(EXPRESS_PORT, function(){
		console.log('Listening on port: ' + EXPRESS_PORT);
	});
}

function startLivereload() {
	lr = require('tiny-lr')();
	lr.listen(LIVERELOAD_PORT);
}

function notifyLivereload(event) {
	var fileName = require('path').relative(EXPRESS_ROOT, event.path);
	lr.changed({
		body: {
			files: [fileName]
		}
	});
}

//Clean task - Cleans dist directory
gulp.task('clean', function (cb) {
	return gulp.src(DIST_ROOT, { read: false })
	.pipe(rimraf({ force: true }));
});

//Compile task - Compiles es6 to es5
gulp.task('compile', function () {
	return gulp.src(config.app + 'scripts/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(traceur())
	.pipe(concat('all.js'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist'));
});

//Cmd task - Another version of compiling es6 to es5
gulp.task('cmd',function() {
	gulp.src(config.app +'bootstrapper.js').pipe(gulpTraceurCmdline('/usr/local/bin/traceur', {
		modules : 'inline',
		out     : './dist/bootstrapper.js',
		debug   : true
	}))
});

//Usemin task - Handles mini and concating scripts
gulp.task('usemin', function () {
	return gulp.src(config.app +'*.html')
	.pipe(usemin({
		css: [ minifyCss(), 'concat' ],
		html: [ minifyHtml({empty: true}) ],
		js: [ uglify(), rev() ]
	}))
	.pipe(gulp.dest(config.dist));
});

//Default task - Handles compiling and starting dev server
gulp.task('default', ['clean', 'compile', 'usemin'], function () {
	startExpress();
	startLivereload();
	gulp.watch('app/**/*.*', notifyLivereload);
});
