var gulp = require('gulp');//引入gulp插件
var html = require('gulp-minify-html');//引入html压缩插件
var sass = require('gulp-sass');//引入sass编译插件
var css = require('gulp-minify-css');//引入css压缩插件
var connect = require('gulp-connect');//配置自刷新插件
// var jshint = require('gulp-jshint');//js错误检测
// var concat = require('gulp-concat');//js代码合并
// var uglify = require('gulp-uglify');//js压缩插件
// var rename = require('gulp-rename');//重命名插件
var imagemin = require('gulp-imagemin');//图片压缩插件


//1.复制文件。
gulp.task('copyhtml',function(){
    gulp.src('*.html')//引入文件路径
    .pipe(gulp.dest('../dist/'));//pipe：管道（链式输出）gulp.dest('输出目录')：输出
});

//2.压缩html文件---gulp-minify-html
gulp.task('uglifyhtml',function(){
    gulp.src('html/*.html')
    .pipe(html())//应用压缩插件
    .pipe(gulp.dest('../dist/html'));//输出
});

//监听压缩
gulp.task('watchhtml',function(){
    gulp.watch('html/*.html',function(){
        gulp.run('uglifyhtml');
    })
})

function swallowError(error) {
	
	console.error(error.toString())
	this.emit('end')
  }

//编译sass
gulp.task('sass',function(){
	gulp.src('scss/*.scss')
	.pipe(sass())//编译sass
	.on('error',swallowError)//防止自动保存错误监听中断
	.pipe(gulp.dest('./css/'));//编译到当前目录
});

gulp.task('watchsass',function(){
	gulp.watch('scss/*.scss',function(){
		gulp.run('sass');
	})
});


//压缩css文件
gulp.task('uglifycss',function(){
	gulp.src('css/*.css')//引入文件
	.pipe(css())//应用压缩插件
	.pipe(gulp.dest('../dist/css/'));//输出
});

//监听压缩
gulp.task('watchcss',function(){
	gulp.watch('css/*.css',function(){//监听
		gulp.run('uglifycss');
	})
});

//页面自刷新
gulp.task('connect',function(){
	connect.server({//配置服务器
		port:8888,
		livereload:true
	});
});

gulp.task('connecthtml',function(){
	gulp.src(['html/*.html','css/*.css'])
	.pipe(connect.reload());
});

gulp.task('connectwatch',function(){
	gulp.watch(['html/*.html','css/*.css'],['connecthtml']);
});

gulp.task('imagemin',function(){
	gulp.src('img/*.png')
	.pipe(imagemin())
	.pipe(gulp.dest('../dist/img'));
});




gulp.task('default',['watchhtml','watchsass','watchcss']);//,'connect','connectwatch','imagemin']);