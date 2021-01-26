const webp = require('gulp-webp');
const rename = require('gulp-rename')
gulp.src('./image/*.{png,jpg}')
  .pipe(rename(function (path) {
    path.extname += '.webp';
  })
  .pipe(webp())
  .pipe(gulp.dest('./'));
