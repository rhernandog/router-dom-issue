"use strict";

// gulp
var gulp = require("gulp");
var util = require("gulp-util");
var source = require("vinyl-source-stream");

// uglify
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require("gulp-rename");

// browserify
var browserify  = require("browserify");
var watchify = require("watchify");

// babel
var babel = require("babelify");

// browser sync
var bSync = require("browser-sync");





/*
 *******************************************************************************************
 *  BROWSERIFY TASK
 *******************************************************************************************
 */
var b = browserify({
	entries: "./src/app.jsx",
	transform: babel.configure({
		presets: ["es2015", "react"],
		plugins: []
	}),
	debug: true
});

var bundled = watchify(b);

// build method
function build(){

	return bundled
		.bundle()
		.on("error", function(e){
			util.log(e.message);
		})
		.pipe(source("app.js"))
		.pipe(gulp.dest("./js/"))
		.pipe( bSync.stream({once:true}) );

}

bundled.on("update", build);

// gulp task
gulp.task("bundle", function(){

	return build();

});







/*
 *******************************************************************************************
 *  PRODUCTION ENVIRONMENT TASK
 *******************************************************************************************
 */
// set the environment first
gulp.task('set-prod-node-env', function() {
	return process.env.NODE_ENV = 'production';
});
// now bundle with the production files
gulp.task("production", ['set-prod-node-env'], function(){

	return b
		.bundle()
		.pipe( source("app.js") )
		.on("error", function(e){
			util.log(e.message);
		})
		.pipe( gulp.dest("./js/")	);

});







/*
 *******************************************************************************************
 *  UGLIFY TASK
 *******************************************************************************************
 */
// run the production-bundle task first
gulp.task("min", ['production'], function(){
	pump([
		gulp.src("./js/app.js"),
		uglify(),
		rename("app.min.js"),
		gulp.dest('./js/')
	]);
});







/*
 *******************************************************************************************
 *  BROWSER SYNC
 *******************************************************************************************
 */
// server
gulp.task("server", ["bundle"], function(){

	bSync.init({
		server:{
			baseDir:["./", "../../"]
		}
	});

	// watch
	gulp.watch([ "./index.html", "./css/*.css", "./js/app.js" ], ["reload"]);

});


gulp.task("reload", function(done){
	bSync.reload();
	done();
});






/*
 *******************************************************************************************
 *  DEFAULT TASK
 *******************************************************************************************
 */
gulp.task("default", ["server"]);
