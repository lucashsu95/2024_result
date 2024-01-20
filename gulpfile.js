// gulpfile.js
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');

// 壓縮 HTML 的任務
gulp.task('minify-html', () => {
    return gulp.src('index.html') // 指定要壓縮的 HTML 檔案
        .pipe(htmlmin({ collapseWhitespace: true })) // 使用 gulp-htmlmin 來壓縮 HTML
        .pipe(gulp.dest('dist')); // 將壓縮後的 HTML 輸出到 dist 目錄
});

// 壓縮 CSS 的任務
gulp.task('minify-css', () => {
    return gulp.src('css/**/*.css') // 指定要壓縮的 CSS 文件
        .pipe(cleanCSS()) // 使用 gulp-clean-css 來壓縮 CSS
        .pipe(gulp.dest('dist/css')); // 將壓縮後的 CSS 輸出到 dist/css 目錄
});

// 壓縮 JavaScript 的任務
gulp.task('minify-js', () => {
    return gulp.src('js/**/*.js') // 指定要壓縮的 JavaScript 文件
        .pipe(terser()) // 使用 gulp-terser 來壓縮 JavaScript
        .pipe(gulp.dest('dist/js')); // 將壓縮後的 JavaScript 輸出到 dist/js 目錄
});

// 預設任務，會同時執行壓縮HTML 和 CSS 和 JavaScript 的任務
gulp.task('default', gulp.parallel('minify-html', 'minify-css', 'minify-js'));