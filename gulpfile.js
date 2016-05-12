// Grab node packages
var gulp = require('gulp');
var rename = require('gulp-rename');
// var merge = require('merge-stream');
uglify = require('gulp-uglify');


gulp.task('compress', function () {
	var js = gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(rename('typed.min.js'))
		.pipe(gulp.dest('dist'));
	// var data = gulp.src('cangjie.json')
	// 	.pipe(gulp.dest('dist'));
	// return merge(js, data);
});
gulp.task('misc', function () {
	return gulp.src('cangjie.json')
		.pipe(gulp.dest('dist/'));
});
// Default Task
gulp.task('default', ['compress']);
gulp.task('dist', ['compress', 'misc']);
