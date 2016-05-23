const isProduction = process.env.NODE_ENV === 'production';
const browserSync = require('./browserSync');

const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');

const defaultOpts = {
  debug: true
};

const watchOpts = {
  cache: { },
  packageCache: { }
};

module.exports = function(opts = {}) {
  const b = browserify(Object.assign(
    { entries: opts.entries },
    defaultOpts,
    opts.watch ? watchOpts : {}
  ));

  b.transform(babelify);
  b.on('log', gutil.log);

  if (opts.watch) {
    b.plugin(watchify);
    b.on('update', bundle);
  }

  function bundle() {
    return b.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source(opts.name))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      // .pipe(gulpif(isProduction, uglify()))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(opts.dest))
      .pipe(browserSync.stream());
  }

  return bundle();
};