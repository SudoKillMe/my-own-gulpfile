
var gulp = require( 'gulp' ),
    path = require( 'path' ),
    config = require( '../config/config.json' );

module.exports.html = function () {

    return gulp.src( path.resolve( config.path.srcDir, '**/*.html' ) )
        .pipe( gulp.dest( config.path.distDir ) );

}