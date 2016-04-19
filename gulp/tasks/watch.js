
var gulp = require('gulp');

gulp.task('watch:styles', ['styles'], function () {
  gulp.watch('src/assets/sass/**/*', ['styles']);
});

gulp.task('watch:scripts', ['scripts'], function () {
  gulp.watch('src/assets/js/**/*', ['scripts']);
});

gulp.task('watch', ['watch:styles', 'watch:scripts']);
