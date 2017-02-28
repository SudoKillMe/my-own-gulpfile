/**
 * Created by techerlang on 2017/2/28.
 */
var gulp = require( 'gulp' ),
    path = require( 'path' ),
    config = require( '../config/config.json' ),
    imagemin = require( 'gulp-imagemin' );

module.exports.image = function () {

    return gulp.src(
            path.join( config.path.srcDir, config.path.imgSrcDir, '**/*.{jpg,jpeg,png,gif}' )
        )
        .pipe( gulp.dest(
            path.join( config.path.distAssetsDir, config.path.imgDistDir )
        ) );

}

module.exports.bundleImage = function () {



}