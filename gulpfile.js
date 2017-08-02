let gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    header = require('gulp-header'),
    gulpsync = require('gulp-sync')(gulp);

gulp.task('compile', () => {
  return gulp.src('src/RequireProps.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename('build.js'))
    .pipe(gulp.dest('lib'));
});

gulp.task('compress', () => {
  return gulp.src('lib/build.js')
    .pipe(uglify())
    .pipe(gulp.dest('lib'));
});

gulp.task('addBanner', () => {
  let pkg = require('./package.json');
  let banner = [
    '/**',
    ' * @name: <%= pkg.name %>',
    ' * @description: <%= pkg.description %>',
    ' * @author: <%= pkg.author %>',
    ' * @version v<%= pkg.version %>',
    ' * @url <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
  ].join('\n');

  return gulp.src('lib/build.js')
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('lib'));
});

// Run tasks in sequence
gulp.task('default', gulpsync.sync(['compile', 'compress', 'addBanner']));
