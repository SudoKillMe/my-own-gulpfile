/**
 * Created by techerlang on 2017/2/24.
 */
var gulp = require( 'gulp' ),
    path = require( 'path' ),
    concat = require( 'gulp-concat' ),
    postcss = require( 'gulp-postcss' ),
    sass = require( 'gulp-sass' ),
    autoprefixer = require( 'autoprefixer' ),
    assets = require( 'postcss-assets' ),
    sprites = require( 'postcss-sprites' ),
    cssnano = require( 'cssnano' ),
    config = require( '../config/config.json' );

module.exports.css = function () {

    var processors = [
        autoprefixer({ browsers: ['last 2 version'] }),
        assets({ loadPaths: ['src/images/'] }),
        sprites({ stylesheetPath: 'src/css/', spritePath: 'src/images' }),
        cssnano
    ];

    return gulp.src(
        path.join( config.path.srcDir, config.path.sassSrcDir, '**/*.scss' )
        )
        .pipe( sass() )
        .pipe( postcss( processors ) )
        .pipe( gulp.dest(
            path.join( config.path.srcDir, config.path.cssSrcDir )
        ) );

}

module.exports.bundleCSS = function () {

    return gulp.src(
        path.join( config.path.srcDir, config.path.cssSrcDir, '**/*.css' )
        )
        .pipe( concat( config.path.cssDistFile ) )
        .pipe( gulp.dest(
            path.join( config.path.distDir, config.path.cssDistDir )
        ) );

}
