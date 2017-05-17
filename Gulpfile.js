const browser = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const listGulpTasks = require('gulp-task-listing');
const sync = require('run-sequence');
const todo = require('gulp-todoist');
const webpack = require('webpack-stream');

const paths = {
  app: ['web/app/**/*.{js,styl,html,json}', 'web/styles/**/*.styl'],
  dest: 'dist',
  entry: 'web/app/entry-point.js',
  html: ['web/index.html', 'web/app/**/*.html'],
  js: 'web/app/**/*!(.spec.js).js',
  styl: ['web/app/**/*.styl', 'web/style/**/*.styl'],
  toCopy: ['web/index.html', 'web/**/*.{jpg,png,ico,svg}']
};

gulp.task('build', ['todo'], function() {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('clean', function() {
  return del(['dist/']);
});

gulp.task('copy', function() {
  return gulp.src(paths.toCopy, { base: 'web' })
    .pipe(gulp.dest(paths.dest));
});

gulp.task('lint', function() {
  return gulp.src('web/app/**/*.js')
    .pipe(eslint({'useEslintrc': true}))
    .pipe(eslint.formatEach('stylish', process.stderr))
    .pipe( eslint.failAfterError() );
});

gulp.task('ls', listGulpTasks);

gulp.task('serve', function() {
  browser({
    port: process.env.PORT || 4500,
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('todo', function() {
  return gulp.src(paths.js)
    .pipe(todo({silent: false, verbose: true}));
});

gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', browser.reload]);
  gulp.watch(paths.toCopy, ['copy', browser.reload]);
});

//______________________________________________________________________________

gulp.task('default', function(done) {
  sync('dist', 'serve', 'watch', done);
});

gulp.task('dist', function(done) {
  sync('clean', 'build', 'copy', done);
});
