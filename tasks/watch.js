/**
 * Created by techerlang on 2017/2/27.
 */

var path = require( 'path' ),
    gulp = require( 'gulp' ),
    bs = require( 'browser-sync' ).get('server'),
    cssTask = require( './css' ),
    config = require( '../config/config.json' );

gulp.task( 'css', cssTask.css );

module.exports.watchTask = function () {
    gulp.watch(
        path.join( config.path.srcDir, config.path.sassSrcDir, '**/*.scss' ),
        [ 'css' ]
    ).on( 'change', bs.reload );

    gulp.watch(
        path.join( config.path.srcDir, config.path.jsSrcDir, '**/*.js' )
    ).on( 'change', bs.reload );

    gulp.watch(
        path.join( config.path.srcDir, config.path.imgSrcDir, '**/*.{png,jpeg,jpg,gif}' ),
        bs.reload
    );

    gulp.watch(
        path.join( config.path.srcDir, '**/*.html' )
    );

}