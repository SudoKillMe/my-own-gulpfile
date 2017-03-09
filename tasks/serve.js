/**
 * Created by techerlang on 2017/2/27.
 */

var bs = require( 'browser-sync' ).create('server'),
    watch = require( './watch' ).watchTask,
    config = require( '../config/config.json' );

module.exports.startServer = function () {

    bs.init( {
        server: {
            baseDir: config.path.serverPath
        }
    }, function () {
        watch();
        // require( './watch' ).watchTask();
    });

}

module.exports.bundleTest = function () {
    bs.init( {
        server: {
            baseDir: 'dist'
        }
    } );
}
