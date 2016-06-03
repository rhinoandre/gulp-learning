var gulp = require('gulp');
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect');
var browserify = require('browserify');
var sorce = require('vinyl-source-stream');

gulp.task('connect', () => {
    connect.server({
        root: 'public',
        port: 3000
    });
});

gulp.task('watch', () => {
    gulp.watch('app/**/*.js', ['browserify']);
    gulp.watch('app/sass/style.sass', ['sass']);
});

gulp.task('browserify', () => {
    // Grabs the app.js file
    return browserify('./app/app.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(sorce('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('sass', () => {
    return sass('app/sass/style.sass')
                .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['connect', 'watch']);
