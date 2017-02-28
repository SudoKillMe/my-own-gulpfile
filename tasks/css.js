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
        //autoprefixer({ browsers: ['last 2 version'] }),
        assets({ loadPaths: ['images/'], basePath: 'src/' }),
        //sprites({ stylesheetPath: 'src/css/', spritePath: 'src/images' }),
        //cssnano
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

    var processors = [
        autoprefixer({ browsers: ['last 2 version'] }),
        //assets({ loadPaths: ['images/'], basePath: 'dist/' }),
        assets({ loadPaths: ['images/'], basePath: 'dist/' }),
        sprites({ stylesheetPath: 'dist/css/', spritePath: 'dist/images' }),
        cssnano
    ];

    return gulp.src(
        path.join( config.path.srcDir, config.path.sassSrcDir, '**/*.{scss,css,sass}' )
        )
        .pipe( sass() )
        .pipe( postcss( processors ) )
        .pipe( concat( config.name.cssDist ) )
        .pipe( gulp.dest(
            path.join( config.path.distAssetsDir, config.path.cssDistDir )
        ) );

}
