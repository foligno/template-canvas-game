var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    del = require('del'),
    pump = require('pump'),
    source = require('vinyl-source-stream'),
    webpack = require('webpack-stream');

var paths = {
    source: './src/',
    dist: './dist/'
};

var files = {
    concat: [,
        paths.source + 'js/libs/**/*.js',
        paths.dist + 'js/app.js'
    ],
    build: [
        paths.source + '.*',
        paths.source + '*.*',
        paths.source + 'img/**/*.*',
        paths.source + 'data/**/*.*',
        paths.source + 'css/fonts/**/*.*'
    ]
};

gulp.task('build', ['js-package', 'js-concat', 'js-compress', 'sass-compile', 'copy']);

gulp.task('clean', function(){

    del([paths.dist, './src/**/.DS_Store']);
});

gulp.task('watch', function() {

    gulp.watch(paths.source + 'js/**/*.js', ['js-package', 'js-concat', 'js-compress']);
    gulp.watch(paths.source + 'sass/*.scss', ['sass-compile']);
    gulp.watch(files.build, ['copy']);
});

gulp.task('js-package', function(cb) {

    pump([
            gulp.src(paths.source + 'js/game/main.js'),
            webpack({ output: { filename: 'app.js' }}),
            gulp.dest(paths.dist + 'js/')
        ],
        cb
    );
});

gulp.task('js-concat', ['js-package'], function (cb) {

    pump([
            gulp.src(files.concat),
            sourcemaps.init(),
            concat('app.js'),
            sourcemaps.write('./'),
            gulp.dest(paths.dist + 'js/')
        ],
        cb
    );
});

gulp.task('js-compress', ['js-concat'], function (cb) {

    pump([
            gulp.src(paths.dist + 'js/app.js'),
            sourcemaps.init(),
            rename('app.min.js'),
            uglify(),
            sourcemaps.write('./'),
            gulp.dest(paths.dist + 'js/')
        ],
        cb
    );
});

gulp.task('sass-compile', function(cb) {

    pump([
            gulp.src(paths.source + 'sass/*.scss'),
            sourcemaps.init(),
            sass({outputStyle: 'compressed'}).on('error', sass.logError),
            sourcemaps.write('./'),
            gulp.dest(paths.dist + 'css/')
        ],
        cb
    );
});

gulp.task('copy', function(cb){

    pump([
            gulp.src(files.build, {base: paths.source}),
            gulp.dest(paths.dist)
        ],
      cb
    );
});