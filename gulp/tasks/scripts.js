var gulp = require('gulp');
var glob = require('glob');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');

gulp.task('scripts', function() {
  var entryPoints = glob.sync(process.cwd() + '/src/assets/js/main.js');

  browserify({
    entries: entryPoints,
    extensions: ['.js']
  })
    .transform(babelify, { presets: ['es2015', 'react'] })
    .bundle()
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./src/assets/js/build/'));
});
