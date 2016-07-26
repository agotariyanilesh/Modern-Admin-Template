var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Compile Sass
gulp.task('styles', function() {
  return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

//Watch task
gulp.task('default',function() {
    gulp.watch(['sass/**/*.scss'], ['styles']);
    gulp.watch(['sass/**/*.scss', './*.html'], [browserSync.reload]);
});
