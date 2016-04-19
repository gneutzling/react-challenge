
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
  return gulp.src('src/assets/sass/source/**/*')
    .pipe(sass({
      includePaths: [
        'src/assets/sass/library/',
        'src/assets/sass/partials'
      ]
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('src/assets/css'));
});
