/**
 * Created by techerlang on 2017/2/28.
 */
var gulp = require( 'gulp' ),
    path = require( 'path' ),
    uglify = require( 'gulp-uglify' ),
    concat = require( 'gulp-concat' ),
    filter = require( 'gulp-filter' ),
    config = require( '../config/config.json' );

module.exports.script = function () {


}

module.exports.bundleScript = function () {

    var f = filter( 'lib/**/*.js', { restore: true, passthrough: false } );
    // js/下的文件处理
    var stream = gulp.src(
        path.join( config.path.srcDir, config.path.jsSrcDir, '**/*.js' )
    )
        .pipe( f )
        .pipe( uglify() )
        .pipe( concat( config.name.jsMinDist ) )
        .pipe( gulp.dest(
            path.join( config.path.distAssetsDir, config.path.jsDistDir )
        ) );

    //js/lib下的文件处理
    f.restore
        .pipe( uglify() )
        .pipe( concat( config.name.jsDist ) )
        .pipe( gulp.dest(
            path.join( config.path.distAssetsDir, config.path.jsDistDir, 'lib/' )
        ) );

    return stream;

}