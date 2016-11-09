const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const $ = gulpLoadPlugins();
const config = require('./config').path;
const reload = browserSync.reload;

gulp.task('serve', ['styles', 'scripts', 'fonts', 'copyView', 'copyIndex', 'copyFonts', 'images'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist'],
      routes: {
          '/node_modules': 'node_modules',
          '/app': 'app'
      }
    }
  });

  gulp.watch([
    config.html.default.all,
    config.images.all
  ]).on('change', reload);

  gulp.watch(config.html.default.all, ['copyView','copyIndex']);
  gulp.watch(config.styles.all, ['styles']);
  gulp.watch(config.scripts.watch, ['scripts']);
  gulp.watch(config.fonts.all, ['fonts']);
});
