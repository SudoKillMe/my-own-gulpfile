/**
 * Created by techerlang on 2017/2/27.
 */

// var gulp = require( 'gulp' ),
//     bs = require( 'browser-sync' ).create(),
//     cssTask = require( './css' ),
//     config = require( '../config/config.json' );
//
// gulp.task( 'css', cssTask.css );
//
// module.exports.serve = function () {
//
//     // bs.watch( '*.html' ).on( 'change', bs.reload );
//     // bs.watch( config.path.srcCSS, [] ).on( 'change', bs.reload );
//     gulp.watch( config.path.srcCSS, ['css'], bs.reload );
//     gulp.watch( 'src/index.html' ).on( 'change', bs.reload );
//     bs.init( {
//         server: './dist'
//     } );
//
// }

var bs = require( 'browser-sync' ).create('server'),
    watch = require( './watch' ).watchTask,
    config = require( '../config/config.json' );

module.exports.startServer = function () {

    bs.init( {
        server: {
            baseDir: config.path.serverPath
        }
    }, function () {
        watch();
        // require( './watch' ).watchTask();
    });

}

module.exports.bundleTest = function () {

}
