/**
 * Created by techerlang on 2017/2/28.
 */

var gulp = require( 'gulp' ),
    path = require( 'path' ),
    fs = require( 'fs' ),
    clean = require( 'gulp-clean' ),
    config = require( '../config/config.json' );

module.exports.clean = function () {

    var htmlFiles = getWillBeCleanedHtmlFiles();

    return gulp.src( [config.path.distAssetsDir].concat( htmlFiles ) )
        .pipe( clean() );

}

//获取要被删除的html文件
function getWillBeCleanedHtmlFiles () {

    var files = fs.readdirSync( path.join( './', config.path.srcDir ) );

    var htmlFiles = files
            .filter( name => path.extname( name ) == '.html' )
            .map( name => path.join( config.path.distHtmlDir, name ) );
    return htmlFiles;
}
