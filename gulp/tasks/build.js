var gulp = require('gulp');
var sequence = require('gulp-sequence');


gulp.task('build-assets', function (done) {
  sequence(['styles', 'scripts'], done);
});

gulp.task('copy-html', function () {
  return gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('copy-css', function () {
  return gulp.src('src/assets/css/*.css').pipe(gulp.dest('dist/assets/css'));
});

gulp.task('copy-js', function () {
  return gulp.src('src/assets/js/build/*.js').pipe(gulp.dest('dist/assets/js/build'));
});

gulp.task('copy-data', function () {
  return gulp.src('src/assets/js/data.json').pipe(gulp.dest('dist/assets/js'));
});

gulp.task('copy-images', function () {
  return gulp.src('src/assets/img/**.*').pipe(gulp.dest('dist/assets/img'));
});


gulp.task('build', [
  'build-assets',
  'copy-html',
  'copy-css',
  'copy-js',
  'copy-data',
  'copy-images'
]);
