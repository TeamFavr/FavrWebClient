var gulp = require('gulp');
var streamify = require('gulp-streamify');
var minify = require('gulp-minify');
var browserify = require('browserify');
var vst = require('vinyl-source-stream');
var vueify = require('vueify');
var plumber = require('gulp-plumber');

var paths = {
  js_src_watch: ["./src/**/*.js","./src/**/*.vue"],
  js_src: "./main.js",
  js_dest: "./dist"
}

gulp.task('browserify', function() {
  var bundleStream = browserify(paths.js_src).transform(vueify).bundle()

  bundleStream
    .pipe(plumber())
    .pipe(vst(paths.js_src))
    .pipe(streamify(minify({
        ext:{
          src:'-debug.js',
          min:'.js'
        }
      })))
    .pipe(gulp.dest(paths.js_dest))
})

gulp.task('watch', ['default'],function () {
  gulp.watch(paths.js_src_watch, ['browserify']);
});

gulp.task('default', ['browserify']);
