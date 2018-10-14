/* eslint-disable */
var gulp = require('gulp')
var config = require('./gulpfile.config.js');
//var swig = require('gulp-swig')

 var imagemin = require("gulp-imagemin"); //压缩图片

//var jade = require('gulp-jade'); // jade

var jshint = require('gulp-jshint'); // 检查js
var eslint = require('gulp-eslint'); // 格式检查
var babel = require('gulp-babel');  //es6 转 es5
var uglify = require('gulp-uglify'); // 创建js混淆压缩 模块md

var minifycss = require('gulp-minify-css'); // 创建 css混淆压缩模块
var scss = require('gulp-sass'); // 创建scss监听与生成css

var gconcat = require('gulp-concat'); // 创建 文件合并模块

var rename = require('gulp-rename'); // 重命名文件
var clean = require('gulp-clean'); // 清除文件

var cache = require('gulp-cache'); // 图片快取，只有更改过得图片会进行压缩

var browserSync = require('browser-sync').create(); // 浏览器刷新

// 默认操作
gulp.task('default', function () {
  console.log('run gulp')
})
// 静态服务 自动监听刷新页面
gulp.task('browser-sync', function () {
  var files = [
    '_site/**/*.html',
    '_site/**/*.css',
    '_site/**/main.min.js',
    '_site/**/lunr.min.js'
  ]
  browserSync.init({
    server: {
      baseDir: config.public
    }
  })
  gulp.watch(files).on('change', browserSync.reload);
})
// 刷新浏览器
gulp.task('reload',function(){
  browserSync.stream()
})
// gulp.task('swig', function () {
//   gulp.src('public/**/*.jade')
//     .pipe(jade({
//       pretty: true
//     }))
//     .pipe(swig({
//       defaults: { cache: false }
//     }))
//     .pipe(gulp.dest('./public'))
//     .pipe(gulp.dest('./app/view'))
// })

// 交互
gulp.task('scripts', function () {
  return gulp.src([config.src.scripts,'!node_modules/**'])
    .pipe(eslint.format())
  	.pipe(babel({
            presets: ['env']
     }))
    .pipe(jshint.reporter('default'))
    // .pipe(gconcat(config.main))
    .pipe(rename({ suffix: '.min' }))
    // .pipe(uglify())
    .pipe(gulp.dest(config.dest.scripts))
})
// 图片
gulp.task('images', function () {
  return gulp.src(config.src.images)
    //  .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(config.dest.images))
})

// 清空图片、样式、js

gulp.task('clean', function () {
  gulp.src([config.dest.styles, config.dest.scripts, config.dest.images], { read: false })
    .pipe(clean())
})

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
/*
gulp.task('default', ['clean'], function() {
    gulp.start('html', 'css', 'images', 'js')
})
*/

// 监听任务 运行语句 gulp watch
gulp.task('watch', function () {
  /*
      server.listen(port, function(err) {
          if (err) {
              return console.log(err)
          }*/

  //gulp.watch('public/**/*.jade', ['swig'])
   gulp.watch(config.src.html, ['reload'])
  // 监听css
  // gulp.watch(config.src.styles,['styles'])

  // // 监听images
  // gulp.watch(config.src.images, ['images'])

  // // 监听js
  // gulp.watch(config.src.scripts,['scripts'])

//   })
})

gulp.task('server', ['browser-sync'])
