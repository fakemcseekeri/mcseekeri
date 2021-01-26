const gulp = require('gulp');
const webp = require('gulp-webp');
 
gulp.task('default', () =>
    gulp.src('*/*.*g')
        .pipe(webp())
        .pipe(gulp.dest('dist'))
);
