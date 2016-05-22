const paths = requrie('./package.json').paths
const path = requrie('path');

const gulp = require('gulp');
const del = require('del');
const newer = require('gulp-newer');
const babel = require("gulp-babel");

// pre
gulp.task('clean', () => del(paths.dest.root));

// assets
gulp.task('assets', function() {
  return gulp.src(path.join(paths.src.assets, '**/*'))
    .pipe(newer(path.dest.assets))
    .pipe(gulp.dest(path.dest.assets));
});

gulp.task('assets-watch', function() {
  gulp.watch(path.join(paths.src.assets, '**/*'), ['assets'])
});

// scripts
gulp.task('scripts', function() { 

});

gulp.task('scripts-watch', function() { 

});

// server
gulp.task('server', function() { 
  return gulp.src(path.join(paths.src.server, '**/*'))
    .pipe(newer(path.dest.server))
    .pipe(babel())
    .pipe(gulp.dest(path.dest.server));
});

gulp.task('server-watch', function() {
  gulp.watch(path.join(paths.src.server, '**/*'), ['server'])
});

// watch
gulp.task('watch', gulp.parallel(
  'assets-watch', 
  'scripts-watch', 
  'server-watch'
));

// compile
gulp.task('compile', gulp.parallel('assets', 'scripts', 'server'));

// default
gulp.task('default', gulp.series('clean', 'compile'));
