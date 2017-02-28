/**
 * Created by techerlang on 2017/2/28.
 */

var gulp = require( 'gulp' ),
    clean = require( 'gulp-clean' ),
    config = require( '../config/config.json' );

module.exports.clean = function () {

    return gulp.src( config.path.distDir )
        .pipe( clean() );

}
