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
    cssnano = require( 'gulp-cssnano' ),
    rename = require( 'gulp-rename' ),
    notify = require( 'gulp-notify' ),
    plumber = require( 'gulp-plumber' ),
    combiner = require( 'stream-combiner2' ),
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
        .pipe( plumber() )
        .pipe( sass().on('error', sass.logError) )
        .pipe( postcss( processors ) )
        // .on( 'error', notify.onError('Error: <%= error.message %>') )
        .pipe( concat( config.name.cssDist ) )
        .pipe( gulp.dest(
            path.join( config.path.srcDir, config.path.cssSrcDir )
        ) );

}

module.exports.bundleCss = function () {

    var processors = [
        autoprefixer({ browsers: ['last 2 version'] }),
        //assets({ loadPaths: ['images/'], basePath: 'dist/' }),
        assets({ loadPaths: ['images/'], basePath: config.path.distAssetsDir }),
        //sprites({ stylesheetPath: 'dist/css/', spritePath: 'dist/images' }),
        //cssnano
    ];

    return gulp.src(
        path.join( config.path.srcDir, config.path.sassSrcDir, '**/*.{scss,css,sass}' )
        )
        .pipe( sass() )
        .pipe( postcss( processors ) )
        .pipe( concat( config.name.cssDist ) )
        .pipe( gulp.dest(
            path.join( config.path.distAssetsDir, config.path.cssDistDir )
        ) )
        .pipe( rename({ suffix: '.min' }) )
        .pipe( cssnano() )
        .pipe( gulp.dest(
            path.join( config.path.distAssetsDir, config.path.cssDistDir )
        ) )


}
