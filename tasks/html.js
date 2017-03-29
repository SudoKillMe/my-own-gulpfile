
var gulp = require( 'gulp' ),
    path = require( 'path' ),
    htmlmin = require( 'gulp-htmlmin' ),
    htmlreplace = require( 'gulp-html-replace' ),
    config = require( '../config/config.json' );

module.exports.html = function () {


}

module.exports.bundleHtml = function () {

    var htmlminOpt = {
        //collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
    };

    var htmlreplaceOpt = {
        'css': path.join( config.path.cssDistDir, config.name.cssMinDist ),
        'js': path.join( config.path.jsDistDir, config.name.jsMinDist ),
        'head-js': path.join( config.path.jsDistDir, 'lib/', 'index.js' )
    }

    return gulp.src(
            path.join( config.path.srcDir, '**/*.html' )
        )
        .pipe( htmlreplace( htmlreplaceOpt ) )
        .pipe( htmlmin( htmlminOpt ) )
        .pipe( gulp.dest( config.path.distHtmlDir ) );

}