var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('default', function () {
    gulp.src('app/**/*.css')
        .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(cssmin())
            .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())    
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['browser-sync', 'sass', 'default'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
});
