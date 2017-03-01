/**
 * Created by techerlang on 2017/2/28.
 */
var gulp = require( 'gulp' ),
    path = require( 'path' ),
    uglify = require( 'gulp-uglify' ),
    concat = require( 'gulp-concat' ),
    config = require( '../config/config.json' );

module.exports.script = function () {


}

module.exports.bundleScript = function () {

    return gulp.src(
        path.join( config.path.srcDir, config.path.jsSrcDir, '**/*.js' )
    )
        .pipe( uglify() )
        .pipe( concat( config.name.jsDist ) )
        .pipe( gulp.dest(
            path.join( config.path.distAssetsDir, config.path.jsDistDir )
        ) );

}