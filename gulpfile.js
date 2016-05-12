// Grab node packages
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


gulp.task('compress', function () {
  var js = gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename('typedCJ.min.js'))
    .pipe(gulp.dest('dist'));
});
gulp.task('misc', function () {
  return gulp.src('cangjie.json')
    .pipe(gulp.dest('dist/'));
});
// Default Task
gulp.task('default', ['compress']);
gulp.task('dist', ['compress', 'misc']);
