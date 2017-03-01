/**
 * dev:
 *   css 任务 ： 从src目录把sass与css 编译成 css autoprefixer， 然后输出到dist目录
 *   js  任务 ： 从src目录把js  输出到dist目录
 *   html任务 ： 从src目录把html 输出到dist目录
 *   img 任务 ： 从src目录把img 压缩或者base64之后输出到dist目录
 *   server任务： 监听dist目录，监听每一个文件的变化(html, css, js)并实时刷新浏览器
 *
 * build:
 *   把css，js打包成一个文件，图片合并成精灵图，文件名进行hash，并对html里面的引用进行替换
 *
 *   hash任务：  对所有的文件名进行hash
 *   replace任务： 对html文件里的引用，进行替换，替换成hash过的uri
 *   clean任务： 清空build文件夹
 */
var gulp = require( 'gulp' ),
    path = require( 'path' ),
    sequence = require( 'gulp-sequence' ),
    serveTask = require( './tasks/serve' ),
    cssTask = require( './tasks/css' ),
    htmlTask = require( './tasks/html' ),
    imgTask = require( './tasks/image' ),
    scriptTask = require( './tasks/script' ),
    cleanTask = require( './tasks/clean' );

gulp.task( 'serve', serveTask.startServer );

gulp.task( 'image', imgTask.image );

gulp.task( 'css', cssTask.css );

gulp.task( 'bundleCss', cssTask.bundleCSS );

gulp.task( 'script', scriptTask.script );

gulp.task( 'bundleScript', scriptTask.bundleScript );

gulp.task( 'clean', cleanTask.clean );

gulp.task( 'bundleTest', serveTask.bundleTest );

gulp.task( 'build', sequence( 'clean', 'image', [ 'bundleCss', 'bundleScript' ], 'bundleHtml', 'bundleTest' ) );

gulp.task( 'html', htmlTask.html );

gulp.task( 'bundleHtml', htmlTask.bundleHtml );
// gulp.task( 'js', jsTask.js );
// gulp.task( 'img', imgTask.img );
// gulp.task( 'html', htmlTask.html );
//
// gulp.task( 'clean', cleanTask.clean );
// gulp.task( 'build', buildTask.build );
// var server = require( './tasks/serve' ).getServer();

// var b = require( 'browser-sync' ).get( 'fuck' );
// console.log( server );
