
var gulp = require( 'gulp' ),
    path = require( 'path' ),
    htmlmin = require( 'gulp-htmlmin' ),
    htmlreplace = require( 'gulp-html-replace' ),
    config = require( '../config/config.json' );

module.exports.html = function () {


}

module.exports.bundleHtml = function () {

    var htmlminOpt = {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
    };

    var htmlreplaceOpt = {
        'css': path.join( config.path.cssDistDir, config.name.cssDist ),
        'js': path.join( config.path.jsDistDir, config.name.jsDist )
    }

    return gulp.src(
            path.join( config.path.srcDir, '**/*.html' )
        )
        .pipe( htmlreplace( htmlreplaceOpt ) )
        .pipe( htmlmin( htmlminOpt ) )
        .pipe( gulp.dest( config.path.distHtmlDir ) );

}