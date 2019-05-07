const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Copy ALL HTML files
gulp.task('copyHTML', async () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// Autoprefix and Minify CSS
gulp.task('css', async () => {
    gulp.src('src/css/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
})

// Minify JS
gulp.task('scripts', async () => {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch for changes
gulp.task('watch', async () => {
    gulp.watch('src/*.html', gulp.series('copyHTML'));
    gulp.watch('src/css/*.css', gulp.series('css'));
    gulp.watch('src/js/*.js', gulp.series('scripts'));
});

// Default
gulp.task('default', gulp.series('copyHTML', 'css', 'scripts'));