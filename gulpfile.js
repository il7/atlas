const isProduction = process.env.NODE_ENV === 'production';
const paths = require('./package.json').paths;

const path = require('path');
const gulp = require('gulp');
const del = require('del');
const newer = require('gulp-newer');
const babel = require("gulp-babel");

const browserSync = require('./build/browserSync');
const createBundle = require('./build/createBundle');

// pre
gulp.task('clean', () => del(paths.dest.root));


// static pages
gulp.task('static', function() {
  return gulp.src(path.join(paths.src.static, '**/*'))
    .pipe(newer(paths.dest.static))
    .pipe(gulp.dest(paths.dest.static));
});

gulp.task('static-watch', function() {
  gulp.watch(path.join(paths.src.static, '**/*'), gulp.series('static'))
});


// assets
gulp.task('assets', function() {
  return gulp.src(path.join(paths.src.assets, '**/*'))
    .pipe(newer(paths.dest.assets))
    .pipe(gulp.dest(paths.dest.assets));
});

gulp.task('assets-watch', function() {
  gulp.watch(path.join(paths.src.assets, '**/*'), gulp.series('assets'))
});


// scripts
const scriptsOpts = { 
  entries: path.join(paths.src.root, 'main.jsx'),
  dest: paths.dest.assets,
  name: 'bundle.js'
};

gulp.task('scripts', function() { 
  return createBundle(Object.assign(scriptsOpts, { watch: false }));
});

gulp.task('scripts-watch', function() { 
  return createBundle(Object.assign(scriptsOpts, { watch: true }));
});


// server
gulp.task('server', function() { 
  return gulp.src(path.join(paths.src.server, '**/*'))
    .pipe(newer(paths.dest.server))
    .pipe(babel())
    .pipe(gulp.dest(paths.dest.server));
});

gulp.task('server-watch', function() {
  gulp.watch(path.join(paths.src.server, '**/*'), gulp.series('server'));
});


// watch
gulp.task('browser-sync', function(done) {
  browserSync.init({
    proxy: 'http://localhost:5000/'
  });

  done();
});

gulp.task('develop', gulp.series(
  gulp.parallel('clean', 'browser-sync'),
  gulp.parallel('assets', 'static', 'server'),
  gulp.parallel('assets-watch', 'static-watch', 'scripts-watch', 'server-watch')
));

// default
gulp.task('default', gulp.series(
  gulp.parallel('clean'),
  gulp.parallel('assets', 'static', 'scripts', 'server')
));
