var gulp     = require('gulp')
var gulpIf   = require('gulp-if')
var imageMin = require('gulp-imagemin')

module.exports = (args, assets, dist) => {
  /**
   * Copia/minifica imagens
   */
  gulp.task('images', () => {
    return gulp.src( assets + 'img/**/*')
      .pipe(gulpIf(args.production, imageMin()))
      .pipe(gulp.dest(dist + 'img'))
  });

  /**
   * Copia fontes
   */
  gulp.task('fonts', () => {
    return gulp.src(assets + 'fonts/*')
      .pipe(gulp.dest(dist + 'fonts'))
  });
  
  /**
   * Copia arquivos
   */
  gulp.task('files', () => {
    return gulp.src(assets + 'files/*')
      .pipe(gulp.dest(dist + 'files'))
  });
}
